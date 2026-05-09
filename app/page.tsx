import Hero from "@/components/Hero";
import ParticlesWrapper from "@/components/ParticlesWrapper";

const phrases = [
	["Building Scalable Apps with", "React"],
	["Engineering Performant Apps with", "Next.js"],
	["Crafting Design Systems", "at Scale"],
	["Bridging Design and", "Engineering"],
	["Building Accessible UIs with", "WCAG"],
	["Architecting Scalable", "Micro-frontends"],
	["Shipping Global Apps with", "i18n"],
	["Writing Bulletproof Code with", "TypeScript"]
];

const socials = [
	{
		href: "https://linkedin.com/in/rafaelcodomingues",
		iconSrc: "/entypo_linkedin.svg",
		label: "/in/rafaelcodomingues"
	},
	{
		href: "https://github.com/rafacdomin",
		iconSrc: "/entypo_github.svg",
		label: "/rafacdomin"
	},
	{
		href: "mailto:contact@rafaeldomingues.dev",
		iconSrc: "/entypo_mail.svg",
		label: "contact@rafaeldomingues.dev"
	}
];

export default function Home() {
	return (
		<div className="relative h-dvh overflow-hidden">
			<ParticlesWrapper
				colors={['#aaaaaa', '#808080', '#cecece']}
				size={4}
				countDesktop={60}
				countTablet={80}
				countMobile={80}
				zIndex={-1}
			/>
			<Hero phrases={phrases} socials={socials} className="absolute inset-0" />
		</div>
	);
}
