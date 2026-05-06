"use client";

import Image from "next/image";
import ParticlesBackground from "@/components/lightswind/particles-background";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface SocialItemProps {
	href: string;
	iconSrc: string;
	label: string;
}

function SocialItem({ href, iconSrc, label }: SocialItemProps) {
	return (
		<a
			href={href}
			target="__blank"
			className="flex items-center gap-2 group lg:hover:bg-black lg:hover:text-white transition-colors duration-200 p-2 rounded"
		>
			<Image
				src={iconSrc}
				alt={label}
				width={40}
				height={40}
				className="lg:group-hover:invert duration-200 w-8 h-8 lg:w-10 lg:h-10"
			/>
			<span className="text-sm xl:text-lg font-light hidden lg:block">
				{label}
			</span>
		</a>
	);
}

const phrases = [
	["Building Scalable Apps with", "React"],
	["Engineering Performant Apps with", "Next.js"],
	["Crafting Design Systems", "at Scale"],
	["Bridging Design and", "Engineering"],
	["Building Accessible UIs with", "WCAG"],
	["Delivering Consistency with", "Design Tokens"],
	["Architecting Scalable", "Micro-frontends"],
	["Shipping Global Apps with", "i18n"],
	["Writing Bulletproof Code with", "TypeScript"]
]

export function Hero({ className }: { className?: string }) {
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
	const [phrase, setPhrase] = useState(phrases[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			const random = Math.floor(Math.random() * phrases.length);
			setPhrase(phrases[random]);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
		checkDesktop();
		window.addEventListener("resize", checkDesktop);
		return () => window.removeEventListener("resize", checkDesktop);
	}, []);

	const dividerVariants = {
		hidden: isDesktop 
			? { y: "-100vh", height: 0, opacity: 0 } 
			: { y: "-100vh", width: 0, opacity: 0 },
		visible: isDesktop
			? {
				y: 0,
				opacity: 1,
				height: "100%",
				transition: { 
					y: { type: "spring", stiffness: 40, damping: 12 },
					height: { delay: 0.8, duration: 0.4, ease: "easeOut" }
				}
			}
			: {
				y: 0,
				opacity: 1,
				width: "100%",
				transition: {
					y: { type: "spring", stiffness: 40, damping: 12 },
					width: { delay: 0.8, duration: 0.4, ease: "easeOut" }
				}
			}
	};

	const leftTextVariants = {
		hidden: isDesktop 
			? { x: 50, y: 0, opacity: 0 } 
			: { x: 0, y: 50, opacity: 0 },
		visible: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
		}
	};

	const rightTextVariants = {
		hidden: isDesktop 
			? { x: -50, y: 0, opacity: 0 } 
			: { x: 0, y: -50, opacity: 0 },
		visible: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
		}
	};

	const socialVariants = {
		hidden: { opacity: 0 },
		visible: { 
			opacity: 1, 
			transition: { delay: isDesktop ? 1.4 : 1.8, duration: 0.8 } 
		}
	};

	return (
		<div className={`flex flex-col justify-center items-center px-4 lg:px-20 ${className || ''}`}>
			<main 
				key={isDesktop ? 'desktop' : 'mobile'}
				className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center max-w-80 lg:max-w-210 xl:max-w-262"
			>
				<motion.h1 
					variants={leftTextVariants}
					initial="hidden"
					animate="visible"
					className="font-bold font-josefin-sans text-5xl xl:text-8xl wrap-break-word lg:text-right xl:my-8"
				>
					Rafael Domingues
				</motion.h1>
				<motion.div
					variants={dividerVariants}
					initial="hidden"
					animate="visible"
					className="border-2 border-black"
				></motion.div>
				<motion.div
					variants={rightTextVariants}
					initial="hidden"
					animate="visible"
					className="flex flex-col gap-10 xl:my-8"
				>
					<h2 className="font-numans font-normal text-2xl xl:text-5xl wrap-break-word text-right lg:text-left xl:min-w-120">
						Frontend Software Engineer
					</h2>
					<p className="text-center lg:text-left lg:text-lg xl:text-xl font-normal font-poppins whitespace-nowrap"> {/* Impact phrase */}
						{phrase[0]}{' '}
						<span className="bg-black text-white p-1 px-2">
							{phrase[1]}
						</span>
					</p>
				</motion.div>
			</main>
			<motion.footer 
				key={isDesktop ? 'desktop-footer' : 'mobile-footer'}
				variants={socialVariants}
				initial="hidden"
				animate="visible"
				className="flex gap-8 lg:gap-10 mt-16"
			>
				<SocialItem
					href="https://linkedin.com/in/rafaelcodomingues"
					iconSrc="/entypo-linkedin.svg"
					label="/in/rafaelcodomingues"
				/>
				<SocialItem
					href="https://github.com/rafacdomin"
					iconSrc="/entypo-github.svg"
					label="/rafacdomin"
				/>
				<SocialItem
					href="mailto:contact@rafaeldomingues.dev"
					iconSrc="/entypo_mail.svg"
					label="contact@rafaeldomingues.dev"
				/>
			</motion.footer>
		</div>
	);
}

export default function Background() {
	return (
		<div className="relative h-dvh overflow-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				className="absolute inset-0 z-[-1]"
			>
				<ParticlesBackground
					colors={['#aaaaaa', '#808080', '#cecece']}
					size={4}
					countDesktop={60}
					countTablet={80}
					countMobile={80}
					zIndex={-1}
				/>
			</motion.div>
			<Hero className="absolute inset-0" />
		</div>
	);
}
