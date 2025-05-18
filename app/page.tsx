import HajjInfographic from "@/components/hajj-infographic"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Hajj Infographic</h1>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Click on each icon to learn the rituals performed during Hajj Tamattu.
        </p>
        <HajjInfographic />
      </div>
    </main>
  )
}
