import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import React, { ReactNode } from 'react';
import './globals.css';
import NavBar from '../components/shared/NavBar';
import Footer from "../components/shared/Footer"
import ProviderNextAuth from './provider';

import { validateAccessToken } from '@/utils/auth/validateAccessToken';
import { ShoppingCart } from '@/components/shared/ShoppingCart';



const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });


export const metadata: Metadata = {
  title: 'Future World',
  description: ' FUTURE WORLD SHOPIFY NEXTJS 14',
};

interface RootLayoutProps {
  children: ReactNode;
}


export const Header = async () => {
  const customer = await validateAccessToken();

return ( 
  <header className='header'>
  <NavBar />
  <br />
  {customer?.email ?  (<p>Hola! {customer.email} </p>) : (<p>no hay token</p>)}
  <ShoppingCart/>
  </header> 
)
}




const  RootLayout: React.FC<RootLayoutProps> = ({ children }) => {





  return (
    <html lang="en">
      
      <head>
      </head>
      <body>
      <ProviderNextAuth>


    <Header/>

        <div className={roboto.className}>{children}</div>
      <Footer/>
    
      </ProviderNextAuth>
      </body>
    </html>
  );
};

export default RootLayout;
