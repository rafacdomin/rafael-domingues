import Image from "next/image";

interface SocialItemProps {
	href: string;
	iconSrc: string;
	label: string;
}

export default function SocialItem({ href, iconSrc, label }: SocialItemProps) {
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
