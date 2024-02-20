import type { Metadata } from "next";
import {Outfit } from "next/font/google";

import "./globals.css";
import Provider from "./Provider";
import Navbar from "./navbar/page";
import Footer from "./footer/page";



const outfit = Outfit({subsets:["latin"]});


export const metadata: Metadata = {
  title: "API Tech Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={outfit.className}>
        <Provider>
          <Navbar/>
          {children}
          <Footer/>
        </Provider>
        </body>
    </html>
  );
}
