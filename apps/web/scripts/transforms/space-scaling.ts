import { type API, type ASTNode, type FileInfo, type JSCodeshift } from 'jscodeshift';

export interface SpacingScaleResult {
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

export const SPACING_SCALE: Record<string, string> = {};

// Tailwind 3 default spacing scale values that are supported out of the box
const SUPPORTED_SPACING_VALUES = new Set([
  '0',
  'px',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
]);

// Spacing and sizing utility prefixes that use the spacing scale
const SPACING_UTILITIES = [
  // Padding
  'p',
  'px',
  'py',
  'ps',
  'pe',
  'pt',
  'pr',
  'pb',
  'pl',
  '-p',
  '-px',
  '-py',
  '-ps',
  '-pe',
  '-pt',
  '-pr',
  '-pb',
  '-pl',
  // Margin
  'm',
  'mx',
  'my',
  'ms',
  'me',
  'mt',
  'mr',
  'mb',
  'ml',
  '-m',
  '-mx',
  '-my',
  '-ms',
  '-me',
  '-mt',
  '-mr',
  '-mb',
  '-ml',
  // Space
  'space-x',
  'space-y',
  // Width
  'min-w',
  'max-w',
  'w',
  // Height
  'min-h',
  'max-h',
  'h',
  // Size
  'size',
  // Gap
  'gap-x',
  'gap-y',
  'gap',
];

// Helper function to calculate rem value from spacing unit
function calculateRemValue(value: string): string {
  // Handle 'px' special case
  if (value === 'px') {
    return '1px';
  }

  // Parse numeric value and calculate rem
  const numericValue = parseFloat(value);
  if (isNaN(numericValue)) {
    return value; // Return original if not numeric
  }

  const remValue = numericValue * 0.25;
  return `${remValue}rem`;
}

// Helper function to transform spacing scale classes in a string
function transformSpacingScale(classNameString: string): {
  transformed: string;
  hasChanges: boolean;
  changes: Array<{ oldClass: string; newClass: string }>;
} {
  const classes = classNameString.split(/\s+/).filter(Boolean);
  const changes: Array<{ oldClass: string; newClass: string }> = [];
  let hasChanges = false;

  const transformedClasses = classes.map((className) => {
    // Split the class into modifier and utility parts
    const parts = className.split(':');
    const modifiers = parts.slice(0, -1);
    const utilityPart = parts[parts.length - 1] ?? '';

    // Check if this is a spacing utility
    let matchedUtility = '';
    let value = '';

    for (const utility of SPACING_UTILITIES) {
      if (utilityPart.startsWith(`${utility}-`)) {
        matchedUtility = utility;
        value = utilityPart.substring(utility.length + 1);
        break;
      }
    }

    // If we found a matching utility and the value is not supported in Tailwind 3
    if (matchedUtility !== '' && value !== '' && !SUPPORTED_SPACING_VALUES.has(value)) {
      // Check if it's a numeric value that we can convert
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue) && numericValue >= 0) {
        const remValue = calculateRemValue(value);
        const newUtility = `${matchedUtility}-[${remValue}]`;
        const transformedClass =
          modifiers.length > 0 ? [...modifiers, newUtility].join(':') : newUtility;

        changes.push({ oldClass: className, newClass: transformedClass });
        hasChanges = true;
        return transformedClass;
      }
    }

    return className;
  });

  return {
    transformed: transformedClasses.join(' '),
    hasChanges,
    changes,
  };
}

// Helper function to process all string literals in an AST node
function processStringLiterals(
  j: JSCodeshift,
  node: ASTNode,
  transformations: SpacingScaleResult['transformations'],
  filePath: string,
) {
  // Find all StringLiteral nodes within this node
  j(node)
    .find(j.StringLiteral)
    .forEach((stringPath) => {
      const result = transformSpacingScale(stringPath.node.value);

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
      const result = transformSpacingScale(value.value);
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
            const result = transformSpacingScale(quasi.value.raw);
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
        const result = transformSpacingScale(expression.value);
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
      const result = transformSpacingScale(value.value);
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
    console.log(`Transformed ${transformations.length} spacing scale classes in ${file.path}`);
    transformations.forEach((t) => {
      console.log(`  ${t.oldClass} -> ${t.newClass} at line ${t.line}`);
    });
  }

  return root.toSource({ quote: 'double' });
}

// Export a function to find spacing scale patterns for scanning
export function findSpacingScalePatterns(content: string): Array<{
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
    // Create a regex pattern to match all spacing utilities
    const utilityPattern = new RegExp(
      `\\b(?:(?:[a-zA-Z0-9_:-]+:)*(?:${SPACING_UTILITIES.join('|')}))-([^\\s\\]\\)\\}'"\`]+)`,
      'g',
    );

    let match;
    while ((match = utilityPattern.exec(line)) !== null) {
      const fullMatch = match[0];
      const value = match[1] ?? '';

      if (value !== '' && !SUPPORTED_SPACING_VALUES.has(value)) {
        // Check if it's a numeric value that we can convert
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue) && numericValue >= 0) {
          const remValue = calculateRemValue(value);

          // Extract the utility prefix from the full match
          const utilityPrefix = fullMatch.substring(0, fullMatch.lastIndexOf('-'));
          const newClass = `${utilityPrefix}-[${remValue}]`;

          results.push({
            oldClass: fullMatch,
            newClass,
            line: lineIndex + 1,
            context: line.trim(),
          });
        }
      }
    }

    utilityPattern.lastIndex = 0;
  });

  return results;
}
