import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CoverTool } from './_components/CoverTool'

export default function CoverIAPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Générateur de Cover (IA)</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <CoverTool />
        </CardContent>
      </Card>
    </div>
  )
}