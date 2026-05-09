import type { Metadata } from "next";
import {Poppins, Numans, Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
	variable: '--font-josefin-sans',
	subsets: ['latin'],
	display: 'swap',
});

const poppins = Poppins({
  weight: ["400", "300"],
	variable: '--font-poppins',
	subsets: ['latin'],
	display: 'swap',
});

const numans = Numans({
  weight: ["400"],
	variable: '--font-numans',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://rafaeldomingues.dev'),
	title: 'Rafael Domingues | Frontend Software Engineer',
	description:
		'Portfolio of Rafael Domingues — Frontend Software Engineer specializing in React, Next.js, TypeScript, and scalable web applications.',
	keywords: [
		'Rafael Domingues',
		'Frontend Engineer',
		'React',
		'Next.js',
		'TypeScript',
		'Software Engineer',
		'Portfolio',
		'Web Developer',
	],
	authors: [{ name: 'Rafael Domingues', url: 'https://rafaeldomingues.dev' }],
	creator: 'Rafael Domingues',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://rafaeldomingues.dev',
		siteName: 'Rafael Domingues',
		title: 'Rafael Domingues | Frontend Software Engineer',
		description:
			'Frontend Software Engineer specializing in React, Next.js, TypeScript, and scalable web applications.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rafael Domingues | Frontend Software Engineer',
		description:
			'Frontend Software Engineer specializing in React, Next.js, TypeScript, and scalable web applications.',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Rafael Domingues',
	jobTitle: 'Frontend Software Engineer',
	url: 'https://rafaeldomingues.dev',
	email: 'contact@rafaeldomingues.dev',
	sameAs: [
		'https://linkedin.com/in/rafaelcodomingues',
		'https://github.com/rafacdomin',
	],
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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
