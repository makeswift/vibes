import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'

import type {Component} from "@/vibes/schema";
import Soul from '@/vibes/soul'

type EnrichedComponent = Component & {
    doc: string,
    docFile: string,
    example: string,
    exampleFile: string,
    componentName: string,
    source: Record<string, string>
}

const typedMatter = <T>(markdown: string) => {
    const rawMatter = matter(markdown);

    return {
        ...rawMatter,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        data: rawMatter.data as T,
    };
};

export async function GET() {
    await Promise.resolve(1)

    const c = Soul.components.filter(cc => {
        return !cc.name.includes("example")
            && cc.name !== 'breadcrumbs'
            && cc.name !== 'calendar'
            && cc.name !== 'card-carousel'
        // return cc.name === 'accordions'
    })
        .filter(cc => {
            const pwd = process.cwd()
            const docFile = `${pwd}/vibes/soul/docs/${cc.name}.mdx`

            return fs.existsSync(docFile)
        })
        .map(cc => {
        // component name
        const pwd = process.cwd()
        const docFile = `${pwd}/vibes/soul/docs/${cc.name}.mdx`
        const docContent = fs.readFileSync(docFile, 'utf8')
        const docFrontMatter = typedMatter<{title: string}>(docContent).data

        const exampleFile = `${pwd}/vibes/soul/examples/primitives/${cc.name}/index.tsx`
        let example = '<missing>'
        if(fs.existsSync(exampleFile))
            example = fs.readFileSync(exampleFile, 'utf8')

        const source: Record<string, string> = {}

        if(fs.existsSync(`${pwd}/vibes/soul/primitives/${cc.name}`)) {
            fs.readdirSync(`${pwd}/vibes/soul/primitives/${cc.name}`).forEach(file =>{
                const content = fs.readFileSync(`${pwd}/vibes/soul/primitives/${cc.name}/${file}`, 'utf8')
                source[file] = content
            })
        }


        const ec: EnrichedComponent = {
            ...cc,
            dependencies: cc.registryDependencies,
            registryDependencies: cc.dependencies,
            doc: docContent,
            docFile: docFile,
            example,
            exampleFile,
            componentName: docFrontMatter.title,
            source,
        }

        return ec
    })

    return Response.json({ok: c})
}