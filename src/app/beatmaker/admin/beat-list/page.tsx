import { cookies } from "next/headers"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import BeatTable from "@/components/beat/BeatTable"

export default async function BeatListPage() {
  const supabase = createServerSupabaseClient(cookies)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  const { data: beats, error } = await supabase
    .from("beats")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Erreur de récupération des beats :", error.message)
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Mes Beats</h1>
      <BeatTable beats={beats || []} />
    </div>
  )
}
