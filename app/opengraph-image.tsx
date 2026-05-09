import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rafael Domingues - Frontend Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					background: 'linear-gradient(135deg, #fffafa 0%, #f0eded 50%, #e8e4e4 100%)',
					fontFamily: 'sans-serif',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				{/* Decorative circles */}
				<div
					style={{
						position: 'absolute',
						top: '-80px',
						right: '-80px',
						width: '300px',
						height: '300px',
						borderRadius: '50%',
						border: '2px solid rgba(0,0,0,0.06)',
						display: 'flex',
					}}
				/>
				<div
					style={{
						position: 'absolute',
						bottom: '-120px',
						left: '-60px',
						width: '400px',
						height: '400px',
						borderRadius: '50%',
						border: '2px solid rgba(0,0,0,0.04)',
						display: 'flex',
					}}
				/>

				{/* Main content */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: '48px',
					}}
				>
					{/* Left: Name */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end',
						}}
					>
						<span
							style={{
								fontSize: '72px',
								fontWeight: 700,
								color: '#171717',
								lineHeight: 1.1,
								letterSpacing: '-2px',
							}}
						>
							Rafael
						</span>
						<span
							style={{
								fontSize: '72px',
								fontWeight: 700,
								color: '#171717',
								lineHeight: 1.1,
								letterSpacing: '-2px',
							}}
						>
							Domingues
						</span>
					</div>

					{/* Divider */}
					<div
						style={{
							width: '3px',
							height: '160px',
							background: '#171717',
							display: 'flex',
						}}
					/>

					{/* Right: Title & Skills */}
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '16px',
						}}
					>
						<span
							style={{
								fontSize: '32px',
								fontWeight: 400,
								color: '#171717',
								lineHeight: 1.3,
							}}
						>
							Frontend Software
						</span>
						<span
							style={{
								fontSize: '32px',
								fontWeight: 400,
								color: '#171717',
								lineHeight: 1.3,
								marginTop: '-12px',
							}}
						>
							Engineer
						</span>
						<div
							style={{
								display: 'flex',
								gap: '8px',
								marginTop: '8px',
							}}
						>
							{['React', 'Next.js', 'TypeScript'].map((tech) => (
								<span
									key={tech}
									style={{
										fontSize: '14px',
										color: '#555',
										background: 'rgba(0,0,0,0.06)',
										padding: '6px 14px',
										borderRadius: '20px',
										fontWeight: 400,
									}}
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Bottom URL */}
				<span
					style={{
						position: 'absolute',
						bottom: '32px',
						fontSize: '16px',
						color: '#999',
						letterSpacing: '2px',
						fontWeight: 300,
					}}
				>
					rafaeldomingues.dev
				</span>
			</div>
		),
		{
			...size,
		}
	);
}
