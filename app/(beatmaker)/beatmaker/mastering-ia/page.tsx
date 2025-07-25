import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MasteringForm } from './_components/MasteringForm'

export default function MasteringIAPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mastering Audio (IA)</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <MasteringForm />
        </CardContent>
      </Card>
    </div>
  )
}