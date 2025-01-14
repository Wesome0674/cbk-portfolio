import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { Context } from "../../../context/NavContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";


export const metadata: Metadata = {
  title: "CBK-portfolio",
  description: "Generated by create next app",
};

type Params = Promise<{ locale: string}>

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const messages = await getMessages();
  const { locale } = await params; 
  
  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased relative min-h-screen">
        <Image
          src="/img/png/bg.png"
          width={1920}
          height={1080}
          alt=""
          className="fixed h-full w-full z-[-1] object-cover"
        />

        <div className="container mx-auto">
          <NextIntlClientProvider messages={messages}>
            <Context>{children}</Context>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}