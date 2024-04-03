const fs = require('fs')
const path = require('path')

const generateIndexFile = componentsDir => {
  if (!fs.existsSync(componentsDir)) {
    console.error(`Directory does not exist: ${componentsDir}`)
    return
  }

  let indexContent = `import { lazy } from 'react'

const components = {\n`

  const addComponent = componentPath => {
    const relativePath = path.relative(componentsDir, componentPath).replace(/\\/g, '/')
    const componentName = relativePath.split('/').slice(0, -1).join('/')

    indexContent += `  '${componentName}': lazy(() => import('./${relativePath}')),\n`
  }

  const traverseDirectory = dir => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
      if (dirent.isDirectory()) {
        traverseDirectory(path.join(dir, dirent.name))
      } else if (dirent.isFile() && dirent.name === 'preview.tsx') {
        addComponent(path.join(dir, 'preview'))
      }
    })
  }

  traverseDirectory(componentsDir)

  indexContent += `} as const

export default components`

  fs.writeFileSync(path.join(componentsDir, 'index.ts'), indexContent)

  console.log('Index file generated: index.ts')
}

// Usage: node thisScript.js /path/to/components
const componentsDir = process.argv[2]
if (!componentsDir) {
  console.error('Usage: node scripts/build-preview-index.js <components-directory>')

  process.exit(1)
}

generateIndexFile(componentsDir)
