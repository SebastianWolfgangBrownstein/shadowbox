import './globals.css'

export const metadata = {
  title: 'ShadowBox',
  description: 'Erotic art gallery & framing service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
