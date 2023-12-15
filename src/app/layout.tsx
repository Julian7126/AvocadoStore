import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React, { ReactNode } from 'react';
import './globals.css';
import NavBar from './components/shared/NavBar';
import Footer from "./components/shared/Footer"

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Future World',
  description: ' FUTURE WORLD SHOPIFY NEXTJS 14',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      
      <head>
      </head>
      <body>
        <header>
       <NavBar/>
        </header>
        <div className={roboto.className}>{children}</div>
      <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
