'use client';

import Image from 'next/image';
import Overlay from '@/components/overlay';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import NavIcon from '@/components/nav-icon';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const path = usePathname();

	const fadeUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
	} as Variants;

	return (
		<main className='flex'>
			<div className='hidden lg:block w-[calc(100%-500px)] h-screen sticky top-0 border-r-8 border-zinc-50 bg-zinc-50'>
				<div className='relative'>
					<Overlay />
					<Image
						src='/images/hero.jpeg'
						alt='hero'
						width={1920}
						height={950}
						className='object-cover w-full h-screen'
					/>
				</div>

				<motion.div
					className='absolute top-0 left-0 w-full p-10 text-choco'
					variants={fadeUp}
					initial='initial'
					animate='animate'
					transition={{ duration: 0.5, ease: 'easeInOut' }}>
					<span className='tracking-[2px] font-light '>THE WEDDING OF</span>
					<h1 className='tracking-[2px] font-clicker text-7xl my-8 '>Nailal & Via</h1>
					<p className='tracking-[1px] font-light leading-relaxed italic'>
						“And I knew exactly how old Walt Disney&apos;s Cinderella felt when she
						<br />
						found her prince.”
						<br />— Elizabeth Young
					</p>
				</motion.div>
			</div>

			<div className='w-full max-w-[500px] mx-auto shadow-2xl lg:shadow-none relative min-h-screen'>
				<AnimatePresence>{children}</AnimatePresence>
			</div>

			{path !== '/' && <NavIcon className='fixed bottom-0 left-0 z-30 p-3' />}
		</main>
	);
};

export default Layout;
