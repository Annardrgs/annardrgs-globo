import React from 'react';
import './style.css';

export const metadata = {
  title: 'Programa Estagiar Globo',
  description: 'Anna Clara Rodrigues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" style={{ height: '100%' }}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/TabIcon.svg" type="image/jpeg" />
      </head>
      <body style={{ margin: '0px' }}>{children}</body>
    </html>
  )
}
