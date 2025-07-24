import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Sale = {
  name: string
  email: string
  avatar: string
  amount: string
}

const sales: Sale[] = [
  {
    name: "K-Mello",
    email: "k.mello@rapgame.fr",
    avatar: "/images/users/k-mello.jpg",
    amount: "+49,00€",
  },
  {
    name: "NeuroType",
    email: "neurotype@battlestyle.ai",
    avatar: "/images/users/neurotype.jpg",
    amount: "+199,99€",
  },
  {
    name: "DaVinci Flow",
    email: "da.vinci@poetica.fr",
    avatar: "/images/users/davinci.jpg",
    amount: "+29,99€",
  },
  {
    name: "Ghost Mode",
    email: "ghostmode@trapcity.io",
    avatar: "/images/users/ghostmode.jpg",
    amount: "+59,99€",
  },
]

export function RecentSales() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Ventes récentes</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {sales.map((sale, index) => (
          <div key={index} className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={sale.avatar} alt={sale.name} />
              <AvatarFallback>{sale.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{sale.name}</p>
              <p className="text-sm text-muted-foreground">{sale.email}</p>
            </div>
            <div className="font-medium text-green-600 dark:text-green-400">
              {sale.amount}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
