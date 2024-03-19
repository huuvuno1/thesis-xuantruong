import { StyledEngineProvider } from '@mui/material';
import type { Metadata } from 'next';
import { Exo } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fashion Forward',
  description:
    '[Fashion Forward Clothing Co.] Fashion stores always offer models each year. In fact, this is a great exercise in e-commerce',
};

const exo = Exo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body className={exo.className}>{children}</body>
      </StyledEngineProvider>
    </html>
  );
}
