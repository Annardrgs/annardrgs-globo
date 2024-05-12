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
      <body style={{ margin: '0px' }}>{children}</body>
    </html>
  )
}
