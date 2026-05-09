"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const ParticlesBackground = dynamic(
	() => import("@/components/lightswind/particles-background"),
	{ ssr: false }
);

interface ParticlesWrapperProps {
	colors?: string[];
	size?: number;
	countDesktop?: number;
	countTablet?: number;
	countMobile?: number;
	zIndex?: number;
}

export default function ParticlesWrapper({
	colors,
	size,
	countDesktop,
	countTablet,
	countMobile,
	zIndex,
}: ParticlesWrapperProps) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="absolute inset-0 z-[-1]"
		>
			<ParticlesBackground
				colors={colors}
				size={size}
				countDesktop={countDesktop}
				countTablet={countTablet}
				countMobile={countMobile}
				zIndex={zIndex}
			/>
		</motion.div>
	);
}
