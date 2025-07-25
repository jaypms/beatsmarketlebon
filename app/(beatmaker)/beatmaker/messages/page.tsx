import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MessageList } from './_components/MessageList'

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Messagerie</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <MessageList />
        </CardContent>
      </Card>
    </div>
  )
}