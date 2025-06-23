import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center p-6 border-t-2" style={{ backgroundColor: 'var(--footer-background)', borderColor: 'var(--color-secondary)' }}>
			<Image
				className="dark:invert"
				src="/next.svg"
				alt="Next.js logo"
				width={180}
				height={38}
				priority
			/>
		</footer>
	)
}