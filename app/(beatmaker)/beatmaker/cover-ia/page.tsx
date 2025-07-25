import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CoverGenerator } from './_components/CoverGenerator'

export default function CoverIAPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Générateur de Cover (IA)</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <CoverGenerator />
        </CardContent>
      </Card>
    </div>
  )
}