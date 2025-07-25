import { MasteringForm } from './_components/MasteringForm'

export default function MasteringPage() {
  return (
    <main className="p-6 bg-background min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Mastering IA</h1>
      <p className="mb-4 max-w-xl">
        Profitez de notre service de mastering assisté par intelligence artificielle pour sublimer vos productions.
        Téléchargez votre fichier audio en WAV ou MP3, et recevez une version masterisée optimisée.
      </p>
      <MasteringForm />
    </main>
  )
}