import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StyledEngineProvider } from "@mui/material";
import type { Metadata } from "next";
import { Exo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const exo = Exo({ subsets: ["latin", "vietnamese", "latin-ext"] });

export const metadata: Metadata = {
  title: "Fashion Forward",
  description:
    "[Fashion Forward Clothing Co.] Fashion stores always offer models each year. In fact, this is a great exercise in e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <body className={`${inter.className} ${exo.className}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </StyledEngineProvider>
    </html>
  );
}
