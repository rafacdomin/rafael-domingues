"use client";

import { useState, useEffect } from "react";
import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";

export default function TypewriterPhrase({ phrases }: { phrases: string[][] }) {
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
