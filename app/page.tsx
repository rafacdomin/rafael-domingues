"use client";

import { animate } from "motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, type Variants } from "motion/react";
import ParticlesBackground from "@/components/lightswind/particles-background";

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
				className="lg:group-hover:invert duration-200 w-8 h-8 xl:w-10 xl:h-10"
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
	["Architecting Scalable", "Micro-frontends"],
	["Shipping Global Apps with", "i18n"],
	["Writing Bulletproof Code with", "TypeScript"]
]

function TypewriterPhrase({ phrases }: { phrases: string[][] }) {
	const [phraseIndex, setPhraseIndex] = useState(5);
	const phrase = phrases[phraseIndex];
	
	const part1 = phrase[0];
	const part2 = phrase[1];
	const totalLength = part1.length + part2.length;
	
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	
	const text1 = useTransform(rounded, (latest) => part1.slice(0, Math.min(latest, part1.length)));
	const text2 = useTransform(rounded, (latest) => latest > part1.length ? part2.slice(0, latest - part1.length) : "");
	const part2Display = useTransform(rounded, (latest) => latest > part1.length ? "inline-block" : "none");

	useEffect(() => {
		let isCancelled = false;
		let timeoutId: NodeJS.Timeout;

		const typeForward = animate(count, totalLength, {
			type: "tween",
			duration: totalLength * 0.05,
			ease: "linear",
		});

		typeForward.then(() => {
			if (isCancelled) return;
			timeoutId = setTimeout(() => {
				if (isCancelled) return;
				const typeBackward = animate(count, 0, {
					type: "tween",
					duration: totalLength * 0.03, // Deletes slightly faster
					ease: "linear",
				});
				
				typeBackward.then(() => {
					if (isCancelled) return;
					setPhraseIndex(current => {
						let random = Math.floor(Math.random() * phrases.length);
						while (random === current) {
							random = Math.floor(Math.random() * phrases.length);
						}
						return random;
					});
				});
			}, 5000); // Wait 2.5 seconds before deleting
		});

		return () => {
			isCancelled = true;
			clearTimeout(timeoutId);
			count.stop();
		};
	}, [phraseIndex, totalLength, count, phrases]);

	return (
		<p className="text-center lg:text-left xl:text-xl font-normal font-poppins h-24 lg:h-fit lg:whitespace-nowrap"> 
			<motion.span>{text1}</motion.span>{' '}
			<motion.span 
				className="bg-black text-white px-2"
				style={{ display: part2Display }}
			>
				<motion.span>{text2}</motion.span>
			</motion.span>
			<motion.span
				animate={{ opacity: [1, 0, 1] }}
				transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
				className="inline-block w-[3px] h-[1em] bg-black ml-1 align-middle"
			/>
		</p>
	);
}

export function Hero({ className }: { className?: string }) {
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

	useEffect(() => {
		const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
		checkDesktop();
		window.addEventListener("resize", checkDesktop);
		return () => window.removeEventListener("resize", checkDesktop);
	}, []);

	const dividerVariants: Variants = {
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

	const leftTextVariants: Variants = {
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

	const rightTextVariants: Variants = {
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

	const socialVariants: Variants = {
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
				className="flex flex-col lg:flex-row gap-7 xl:gap-10 items-center max-w-80 lg:max-w-210 xl:max-w-262"
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
					<TypewriterPhrase phrases={phrases} />
				</motion.div>
			</main>
			<motion.footer 
				key={isDesktop ? 'desktop-footer' : 'mobile-footer'}
				variants={socialVariants}
				initial="hidden"
				animate="visible"
				className="flex gap-8 lg:gap-10 absolute bottom-24"
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
