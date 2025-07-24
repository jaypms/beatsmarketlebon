import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function BeatmakerPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('auth_token')?.value

  if (!token) {
    redirect('/login')
  }

  const res = await fetch('http://localhost:3000/api/beatmaker/profile', {
    headers: {
      Cookie: `auth_token=${token}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Échec du chargement du profil beatmaker')
  }

  const profile = await res.json()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Bienvenue, {profile.name} !</h1>
      {/* D’autres infos sur le profil ici */}
    </div>
  )
}
