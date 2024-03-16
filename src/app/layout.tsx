import { StyledEngineProvider } from '@mui/material';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fashion Forward',
  description:
    '[Fashion Forward Clothing Co.] Fashion stores always offer models each year. In fact, this is a great exercise in e-commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body>{children}</body>
      </StyledEngineProvider>
    </html>
  );
}
