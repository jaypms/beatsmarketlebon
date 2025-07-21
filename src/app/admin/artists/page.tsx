import { ArtistsTable } from "@/components/admin/artists-table"
import { PageHeader } from "@/components/ui/page-header"

export default function AdminArtistsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Gestion des artistes"
        description="Modérez, gérez et suivez l'activité des artistes inscrits sur BeatsMarket."
      />
      <ArtistsTable />
    </div>
  )
}
