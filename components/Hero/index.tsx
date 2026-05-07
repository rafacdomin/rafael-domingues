"use client";

import { motion, type Variants } from "motion/react";
import SocialItem from "@/components/SocialItem";
import TypewriterPhrase from "@/components/TypewriterPhrase";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface Social {
	href: string;
	iconSrc: string;
	label: string;
}

interface HeroProps {
	phrases: string[][];
	socials: Social[];
	className?: string;
}

const dividerVariants: Variants = {
	hidden: (isMobile: boolean) => ({
		y: "-100vh",
		opacity: 0,
		...(isMobile ? { width: 0 } : { height: 0 })
	}),
	visible: (isMobile: boolean) => ({
		y: 0,
		opacity: 1,
		...(isMobile ? { width: "100%" } : { height: "100%" }),
		transition: {
			y: { type: "spring", stiffness: 40, damping: 12 },
			...(isMobile 
				? { width: { delay: 0.8, duration: 0.4, ease: "easeOut" } }
				: { height: { delay: 0.8, duration: 0.4, ease: "easeOut" } }
			)
		}
	})
};

const leftTextVariants: Variants = {
	hidden: (isMobile: boolean) => ({
		opacity: 0,
		...(isMobile ? { x: 0, y: 50 } : { x: 50, y: 0 })
	}),
	visible: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
	}
};

const rightTextVariants: Variants = {
	hidden: (isMobile: boolean) => ({
		opacity: 0,
		...(isMobile ? { x: 0, y: -50 } : { x: -50, y: 0 })
	}),
	visible: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
	}
};

const socialVariants: Variants = {
	hidden: { opacity: 0 },
	visible: (isMobile: boolean) => ({ 
		opacity: 1, 
		transition: { delay: isMobile ? 1.8 : 1.4, duration: 0.8 } 
	})
};

export default function Hero({ phrases, socials, className }: HeroProps) {
	const isMobile = useIsMobile();

	return (
		<div className={cn("flex flex-col justify-center items-center px-4 lg:px-20", className)}>
			<main 
				key={!isMobile ? 'desktop' : 'mobile'}
				className="flex flex-col lg:flex-row gap-7 xl:gap-10 items-center max-w-80 lg:max-w-210 xl:max-w-262"
			>
				<motion.h1 
					custom={isMobile}
					variants={leftTextVariants}
					initial="hidden"
					animate="visible"
					className="font-bold font-josefin-sans text-5xl xl:text-8xl wrap-break-word lg:text-right xl:my-8"
				>
					Rafael Domingues
				</motion.h1>
				<motion.div
					custom={isMobile}
					variants={dividerVariants}
					initial="hidden"
					animate="visible"
					className="border-2 border-black"
				></motion.div>
				<motion.div
					custom={isMobile}
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
				key={!isMobile ? 'desktop-footer' : 'mobile-footer'}
				custom={isMobile}
				variants={socialVariants}
				initial="hidden"
				animate="visible"
				className="flex gap-8 lg:gap-10 absolute bottom-24"
			>
				{socials.map((social, index) => (
					<SocialItem
						key={social.label + '-' + index}
						href={social.href}
						iconSrc={social.iconSrc}
						label={social.label}
					/>
				))}
			</motion.footer>
		</div>
	);
}
