import matter from 'gray-matter'
import fs from 'node:fs'

import type {Component} from "@/vibes/schema";
import Soul from '@/vibes/soul'

type EnrichedComponent = Component & {
    description?: string
    doc?: string,
    docFile?: string,
    example: string,
    exampleFile: string,
    componentName: string,
    source: Record<string, string>,
    componentType: string
}

const typedMatter = <T>(markdown: string) => {
    const rawMatter = matter(markdown);

    return {
        ...rawMatter,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        data: rawMatter.data as T,
    };
};

function kebabToPascalCase(str: string): string {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

export async function GET() {
    await Promise.resolve(1)

    const c = Soul.components.filter(cc => {
            // ignore examples
            return !cc.name.includes("example")
        })
        // .filter(cc => {
        //     return cc.name === 'cursor-pagination'
        // })
        .map(cc => {
        // component name
        const componentName = kebabToPascalCase(cc.name);
        console.log(cc.name)
        const pwd = process.cwd()
        let docFile: string | undefined = `${pwd}/vibes/soul/docs/${cc.name}.mdx`
        let docContent: string | undefined = undefined
        let description: string | undefined = undefined
        if(fs.existsSync(docFile)) {
            docContent = fs.readFileSync(docFile, 'utf8')
            const docFrontMatter = typedMatter<{title: string, description: string}>(docContent).data
            description = docFrontMatter.description
            docFile = docFile.replace(pwd, '/dev')
        } else {
            docFile = undefined
        }
        
        let componentType = 'primitive'

        if(cc.files.some(x => x.startsWith('section'))) {
            componentType = 'section'
        }

        let exampleFile = `${pwd}/vibes/soul/examples/primitives/${cc.name}/index.tsx`
        let example = '<missing>'
        if(fs.existsSync(exampleFile))
        {
            example = fs.readFileSync(exampleFile, 'utf8')
            exampleFile = exampleFile.replace(pwd, '/src')
        }

        const source: Record<string, string> = {}

        if(fs.existsSync(`${pwd}/vibes/soul/primitives/${cc.name}`)) {
            fs.readdirSync(`${pwd}/vibes/soul/primitives/${cc.name}`).forEach(file =>{
                const content = fs.readFileSync(`${pwd}/vibes/soul/primitives/${cc.name}/${file}`, 'utf8')
                source[`primitives/${cc.name}/${file}`] = content
            })
        }

        if(fs.existsSync(`${pwd}/vibes/soul/sections/${cc.name}`)) {
            fs.readdirSync(`${pwd}/vibes/soul/sections/${cc.name}`).forEach(file =>{
                const content = fs.readFileSync(`${pwd}/vibes/soul/sections/${cc.name}/${file}`, 'utf8')
                source[`sections/${cc.name}/${file}`] = content
            })
        }
        cc.files.forEach(f => {
            if(fs.existsSync(`${pwd}/vibes/soul/${f}`)) {
                const content = fs.readFileSync(`${pwd}/vibes/soul/${f}`, 'utf8')
                source[f] = content
            }
        })


        const ec: EnrichedComponent = {
            ...cc,
            // files: [], // not helpful
            dependencies: cc.registryDependencies,
            registryDependencies: cc.dependencies,
            doc: docContent,
            docFile,
            example,
            exampleFile,
            componentName,
            source,
            componentType,
            description
        }

        return ec
    })

    return Response.json({ok: c})
}