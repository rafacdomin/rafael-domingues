import type { Metadata } from "next";
import {Poppins, Numans, Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
	variable: '--font-josefin-sans',
	subsets: ['latin'],
});

const poppins = Poppins({
  weight: ["400", "300"],
	variable: '--font-poppins',
	subsets: ['latin'],
});

const numans = Numans({
  weight: ["400"],
	variable: '--font-numans',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Rafael Domingues | Frontend Software Engineer',
	description: 'Frontend Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${poppins.variable} ${numans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
