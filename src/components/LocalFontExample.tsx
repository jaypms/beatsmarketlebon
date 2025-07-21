import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: '../fonts/MyFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MyFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--my-font',
  display: 'swap',
})

export default function LocalFontExample() {
  return (
    <div className={myFont.variable}>
      <p style={{ fontFamily: 'var(--my-font)' }}>
        Ceci est un texte utilisant une font locale avec next/font/local.
      </p>
    </div>
  )
}
