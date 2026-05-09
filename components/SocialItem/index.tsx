"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface SocialItemProps {
	href: string;
	iconSrc: string;
	label: string;
}

export default function SocialItem({ href, iconSrc, label }: SocialItemProps) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			initial="initial"
			whileHover="hover"
			className="relative flex items-center gap-2 group lg:hover:text-white transition-colors duration-200 py-1 px-2 rounded-lg overflow-hidden z-10"
		>
			<motion.div
				className="absolute inset-0 bg-black z-[-1] hidden lg:block"
				style={{ originX: 0 }}
				variants={{
					initial: { scaleX: 0 },
					hover: { scaleX: 1 }
				}}
				transition={{ duration: 0.2, ease: "easeInOut" }}
			/>
			<Image
				src={iconSrc}
				alt={label}
				width={40}
				height={40}
				className="lg:group-hover:invert transition-all duration-200 w-8 h-8 xl:w-10 xl:h-10"
			/>
			<span className="text-sm xl:text-lg font-light hidden lg:block">
				{label}
			</span>
		</motion.a>
	);
}
