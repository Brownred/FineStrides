import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import {Providers} from '../providers/nextUIProvider'


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-ibm-plex-serif' });

export const metadata: Metadata = {
  title: "FineStrides",
  description: "FineStrides is the #1 mordern banking plartform for everyone",
  icons: {
    icon: '/icons/logo.svg'
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <Providers>
        <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        
          {children}
        </body>
    </Providers>
    </html>
  );
}
