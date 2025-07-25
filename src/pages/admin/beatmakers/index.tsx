import Link from "next/link";

export default function AdminBeatmakerPage() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Administration Beatmaker</h1>
      <nav className="flex flex-col space-y-4">
        <Link href="/admin/beatmaker/beats" className="btn-primary">Gestion des Beats</Link>
        <Link href="/admin/beatmaker/parameters" className="btn-primary">Paramètres Boutique</Link>
        <Link href="/admin/beatmaker/messages" className="btn-primary">Messages</Link>
        <Link href="/admin/beatmaker/ia-cover" className="btn-primary">IA Cover</Link>
        <Link href="/admin/beatmaker/ia-mastering" className="btn-primary">IA Mastering</Link>
        <Link href="/admin/beatmaker/distribution" className="btn-primary">Distribution Digitale</Link>
      </nav>
    </main>
  );
}