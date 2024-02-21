import type { Metadata } from "next";
import {Outfit } from "next/font/google";

import "./globals.css";
import Provider from "./Provider";
import Navbar from "./navbar/page";
import Footer from "./footer/page";



const outfit = Outfit({subsets:["latin"]});


export const metadata: Metadata = {
  title: "Tech Shop API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
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
