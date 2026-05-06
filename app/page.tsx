import Image from "next/image";

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
			<span className="text-sm xl:text-xl font-light hidden lg:block">
				{label}
			</span>
		</a>
	);
}

export default function Home() {
  return (
		<div className="flex flex-col h-dvh justify-center items-center px-4 lg:px-20">
			<main className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center max-w-80 lg:max-w-210 xl:max-w-262">
				<h1 className="font-bold font-josefin-sans text-5xl xl:text-8xl wrap-break-word lg:text-right">
					Rafael Domingues
				</h1>
				<div className="w-full lg:h-56 xl:h-80 lg:w-0 border-2 border-black"></div>
				<div className="flex flex-col gap-8">
					<h2 className="font-numans font-normal text-2xl xl:text-5xl wrap-break-word text-right lg:text-left xl:min-w-120">
						Frontend Software Engineer
					</h2>
					<p className="text-center lg:text-left lg:text-lg xl:text-2xl font-normal font-poppins">
						Building Scalable Apps with{' '}
						<span className="bg-black text-white p-1 px-2">
							React
						</span>
					</p>
				</div>
			</main>
			<footer className="flex gap-8 lg:gap-10 mt-16">
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
			</footer>
		</div>
	);
}
