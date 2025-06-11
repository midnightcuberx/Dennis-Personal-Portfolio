import React from 'react'
import './styles.css'

export const metadata = {
  description: "Dennis Hu's Personal Portfolio website",
  title: 'Dennis Hu',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
