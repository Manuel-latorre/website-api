import type { Metadata } from "next";
import { Inter, Outfit, Space_Mono } from "next/font/google";

import "./globals.css";
import Provider from "./Provider";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({subsets:["latin"]});
const monospace = Space_Mono({weight:["400"], subsets:["latin"]});

export const metadata: Metadata = {
  title: "API",
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
