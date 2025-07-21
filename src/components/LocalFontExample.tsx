import localFont from 'next/font/local'

const myFont = localFont({
  src: '../fonts/MyFont-Regular.woff2',
  variable: '--my-font',
  display: 'swap',
})

export default function LocalFontExample() {
  return (
    <>
      <style jsx global>{`
        :root {
          --my-font: ${myFont.style.fontFamily};
        }
      `}</style>
      <main className={myFont.className}>
        <h1>Exemple de police locale avec Next.js</h1>
        <p>Cette page utilise une police locale avec la variable CSS {`--my-font`}.</p>
      </main>
    </>
  )
}
