import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import {Context} from  "../../context/NavContext"

export const metadata: Metadata = {
  title: "CBK-portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`antialiased relative min-h-screen `}>
        <Image
          src="/img/png/bg.png"
          width={1920}
          height={1080}
          alt=""
          className="fixed h-full w-full z-[-1] object-cover"
        />

        <div className="container mx-auto">
          <Context>{children}</Context>
        </div>
      </body>
    </html>
  );
}
