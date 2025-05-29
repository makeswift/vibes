import { type API, type ASTNode, type FileInfo, type JSCodeshift } from 'jscodeshift';

export interface RenamedUtilitiesResult {
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

// Mapping of Tailwind 4 classes to Tailwind 3 classes
const UTILITY_MAPPINGS: Record<string, string> = {
  'shadow-xs': 'shadow-sm',
  'shadow-sm': 'shadow',
  'drop-shadow-xs': 'drop-shadow-sm',
  'drop-shadow-sm': 'drop-shadow',
  'blur-xs': 'blur-sm',
  'blur-sm': 'blur',
  'backdrop-blur-xs': 'backdrop-blur-sm',
  'backdrop-blur-sm': 'backdrop-blur',
  'rounded-xs': 'rounded-sm',
  'rounded-sm': 'rounded',
  'outline-hidden': 'outline-none',
  'ring-3': 'ring',
};

// Helper function to transform className string
function transformClassNames(classNameString: string): {
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
    const utility = parts[parts.length - 1] ?? '';

    if (utility !== '' && utility in UTILITY_MAPPINGS) {
      const newClass = UTILITY_MAPPINGS[utility];
      if (typeof newClass === 'string') {
        const transformedClass =
          modifiers.length > 0 ? [...modifiers, newClass].join(':') : newClass;
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
  transformations: RenamedUtilitiesResult['transformations'],
  filePath: string,
) {
  // Find all StringLiteral nodes within this node
  j(node)
    .find(j.StringLiteral)
    .forEach((stringPath) => {
      const result = transformClassNames(stringPath.node.value);

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
      const result = transformClassNames(value.value);
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
            const result = transformClassNames(quasi.value.raw);
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
        const result = transformClassNames(expression.value);
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
      const result = transformClassNames(value.value);
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
    console.log(`Transformed ${transformations.length} utility classes in ${file.path}`);
    transformations.forEach((t) => {
      console.log(`  ${t.oldClass} -> ${t.newClass} at line ${t.line}`);
    });
  }

  return root.toSource();
}
