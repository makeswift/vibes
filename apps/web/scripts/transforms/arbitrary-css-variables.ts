import { type API, type ASTNode, type FileInfo, type JSCodeshift } from 'jscodeshift';

export interface ArbitraryCssResult {
  filesFound: number;
  filesNeedingTransformation: number;
  transformations: Array<{
    file: string;
    oldClass: string;
    newClass: string;
    line: number;
    column: number;
  }>;
}

// Export utility mappings for scanning (empty since this uses custom logic)
export const ARBITRARY_CSS: Record<string, string> = {};

// Helper function to find balanced parentheses content
function findBalancedParens(
  str: string,
  startIndex: number,
): { content: string; endIndex: number } | null {
  let depth = 0;
  let content = '';

  for (let i = startIndex; i < str.length; i += 1) {
    const char = str[i];

    if (char === '(') {
      depth += 1;
      if (depth > 1) content += char; // Don't include the opening paren of the outermost level
    } else if (char === ')') {
      depth -= 1;
      if (depth === 0) {
        // Found the matching closing paren
        return { content, endIndex: i };
      } else {
        content += char;
      }
    } else {
      if (depth > 0) content += char ?? '';
    }
  }

  return null; // Unbalanced parentheses
}

// Helper function to transform arbitrary CSS variables in a string
function transformArbitraryCss(classNameString: string): {
  transformed: string;
  hasChanges: boolean;
  changes: Array<{ oldClass: string; newClass: string }>;
} {
  let transformed = classNameString;
  const changes: Array<{ oldClass: string; newClass: string }> = [];

  // Match class prefix followed by -(
  const prefixPattern = /([a-zA-Z0-9_:-]+)-\(/g;
  let match;
  let offset = 0; // Track offset due to replacements

  while ((match = prefixPattern.exec(classNameString)) !== null) {
    const classPrefix = match[1];
    const parenStartIndex = match.index + match[0].length - 1; // Index of the opening (

    const balanced = findBalancedParens(classNameString, parenStartIndex);
    if (balanced) {
      const fullMatch = classNameString.substring(match.index, balanced.endIndex + 1);
      const newClass = `${classPrefix}-[${balanced.content}]`;

      // Replace in the transformed string, accounting for previous replacements
      const adjustedStart = match.index + offset;
      const adjustedEnd = adjustedStart + fullMatch.length;

      transformed =
        transformed.substring(0, adjustedStart) + newClass + transformed.substring(adjustedEnd);

      // Update offset for next replacement
      offset += newClass.length - fullMatch.length;

      changes.push({
        oldClass: fullMatch,
        newClass,
      });
    }
  }

  return {
    transformed,
    hasChanges: changes.length > 0,
    changes,
  };
}

// Helper function to process all string literals in an AST node
function processStringLiterals(
  j: JSCodeshift,
  node: ASTNode,
  transformations: ArbitraryCssResult['transformations'],
  filePath: string,
) {
  // Find all StringLiteral nodes within this node
  j(node)
    .find(j.StringLiteral)
    .forEach((stringPath) => {
      const result = transformArbitraryCss(stringPath.node.value);

      if (result.hasChanges) {
        // Update the string literal value
        stringPath.node.value = result.transformed;

        // Record transformations
        result.changes.forEach((change) => {
          transformations.push({
            file: filePath,
            oldClass: change.oldClass,
            newClass: change.newClass,
            line: stringPath.node.loc?.start.line ?? 0,
            column: stringPath.node.loc?.start.column ?? 0,
          });
        });
      }
    });
}

export default function transform(file: FileInfo, api: API): string {
  const j = api.jscodeshift;
  const root = j(file.source);

  const transformations: Array<{
    file: string;
    oldClass: string;
    newClass: string;
    line: number;
    column: number;
  }> = [];

  // Transform JSX className attributes
  root.find(j.JSXAttribute, { name: { name: 'className' } }).forEach((path) => {
    const value = path.node.value;

    if (!value) return;

    // Handle direct string literals: className="..."
    if (value.type === 'StringLiteral') {
      const result = transformArbitraryCss(value.value);
      if (result.hasChanges) {
        value.value = result.transformed;

        result.changes.forEach((change) => {
          transformations.push({
            file: file.path,
            oldClass: change.oldClass,
            newClass: change.newClass,
            line: value.loc?.start.line ?? 0,
            column: value.loc?.start.column ?? 0,
          });
        });
      }
    }

    // Handle JSX expression containers: className={...}
    else if (value.type === 'JSXExpressionContainer') {
      const expression = value.expression;

      // Handle template literals: className={`...`}
      if (expression.type === 'TemplateLiteral') {
        expression.quasis.forEach((quasi) => {
          if (quasi.value.raw !== '') {
            const result = transformArbitraryCss(quasi.value.raw);
            if (result.hasChanges) {
              quasi.value.raw = result.transformed;
              quasi.value.cooked = result.transformed;

              result.changes.forEach((change) => {
                transformations.push({
                  file: file.path,
                  oldClass: change.oldClass,
                  newClass: change.newClass,
                  line: quasi.loc?.start.line ?? 0,
                  column: quasi.loc?.start.column ?? 0,
                });
              });
            }
          }
        });
      }

      // Handle function calls like clsx(), cn(), etc.
      else if (expression.type === 'CallExpression') {
        // Process all string literals within the call expression
        processStringLiterals(j, expression, transformations, file.path);
      }

      // Handle direct string literals within expressions: className={'...'}
      else if (expression.type === 'StringLiteral') {
        const result = transformArbitraryCss(expression.value);
        if (result.hasChanges) {
          expression.value = result.transformed;

          result.changes.forEach((change) => {
            transformations.push({
              file: file.path,
              oldClass: change.oldClass,
              newClass: change.newClass,
              line: expression.loc?.start.line ?? 0,
              column: expression.loc?.start.column ?? 0,
            });
          });
        }
      }
    }
  });

  // Also handle class attributes for regular HTML elements
  root.find(j.JSXAttribute, { name: { name: 'class' } }).forEach((path) => {
    const value = path.node.value;

    if (value && value.type === 'StringLiteral') {
      const result = transformArbitraryCss(value.value);
      if (result.hasChanges) {
        value.value = result.transformed;

        result.changes.forEach((change) => {
          transformations.push({
            file: file.path,
            oldClass: change.oldClass,
            newClass: change.newClass,
            line: value.loc?.start.line ?? 0,
            column: value.loc?.start.column ?? 0,
          });
        });
      }
    }
  });

  // Log transformations for debugging/reporting
  if (transformations.length > 0) {
    console.log(`Transformed ${transformations.length} arbitrary CSS classes in ${file.path}`);
    transformations.forEach((t) => {
      console.log(`  ${t.oldClass} -> ${t.newClass} at line ${t.line}`);
    });
  }

  return root.toSource({ quote: 'double' });
}

// Helper function for scanning (reuse the balanced parens logic)
function findBalancedParensForScanning(
  str: string,
  startIndex: number,
): { content: string; endIndex: number } | null {
  let depth = 0;
  let content = '';

  for (let i = startIndex; i < str.length; i += 1) {
    const char = str[i];

    if (char === '(') {
      depth += 1;
      if (depth > 1) content += char;
    } else if (char === ')') {
      depth -= 1;
      if (depth === 0) {
        return { content, endIndex: i };
      } else {
        content += char;
      }
    } else {
      if (depth > 0) content += char ?? '';
    }
  }

  return null;
}

// Export a function to find arbitrary CSS patterns for scanning
export function findArbitraryCssPatterns(content: string): Array<{
  oldClass: string;
  newClass: string;
  line: number;
  context: string;
}> {
  const results: Array<{
    oldClass: string;
    newClass: string;
    line: number;
    context: string;
  }> = [];

  const lines = content.split('\n');

  lines.forEach((line, lineIndex) => {
    const prefixPattern = /([a-zA-Z0-9_:-]+)-\(/g;
    let match;

    while ((match = prefixPattern.exec(line)) !== null) {
      const classPrefix = match[1];
      const parenStartIndex = match.index + match[0].length - 1;

      const balanced = findBalancedParensForScanning(line, parenStartIndex);
      if (balanced) {
        const fullMatch = line.substring(match.index, balanced.endIndex + 1);
        const newClass = `${classPrefix}-[${balanced.content}]`;

        results.push({
          oldClass: fullMatch,
          newClass,
          line: lineIndex + 1,
          context: line.trim(),
        });
      }
    }

    prefixPattern.lastIndex = 0;
  });

  return results;
}
