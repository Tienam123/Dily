import '../styles/styles.scss';
import React from 'react';
import { Providers } from '@/components/Providers/Provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <body>
        <Providers>
          <div id="wrapper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
