import { ComponentPreview } from '@/components/ui/component-preview'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/vibes/eclipse/button'

export default function Preview() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <ComponentPreview color="#333333">
          <Button variant="primary" size="default">
            Text
          </Button>
        </ComponentPreview>
      </TabsContent>
      <TabsContent value="code">
        <pre>
          <code>This is some code</code>
        </pre>
      </TabsContent>
    </Tabs>
  )
}
