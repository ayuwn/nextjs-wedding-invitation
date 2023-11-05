'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useAudio } from '@/hook/useAudio';
import Overlay from '@/components/overlay';
import Separator from '@/components/separator';
import Button from '@/components/button';
import { Mail, Bird, Heart, Loading } from '@/components/icons';
import { motion, Variants } from 'framer-motion';

interface HomePageProps {
	//
}

const HomePage: React.FC<HomePageProps> = ({}) => {
	const router = useRouter();

	const { setPlaying } = useAudio();
	const [loading, setLoading] = React.useState(false);

	const handleClick = React.useCallback(() => {
		setPlaying(true);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			router.push('/welcome');
		}, 1000);
	}, [setPlaying, router]);

	const fadeUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
	} as Variants;

	return (
		<motion.div
			className='w-[500px] mx-auto shadow-2xl relative min-h-screen'
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}>
			<div className='w-full h-full text-white bg-blue'>
				<div className='relative'>
					<Overlay />
					<Separator className='absolute bottom-0 left-0 w-full' />
					<Image
						src='/images/hero.jpeg'
						alt='hero'
						width={1920}
						height={950}
						className='w-full h-[90vh] object-cover'
					/>
				</div>

				<div className='absolute top-0 left-0 w-full h-[90vh]'>
					<div className='flex flex-col items-center justify-between h-full py-20 '>
						<motion.div
							className='flex flex-col items-center justify-center space-y-2'
							variants={fadeUp}
							initial='initial'
							animate='animate'
							transition={{ duration: 0.5, ease: 'easeInOut' }}>
							<Bird className='w-16 h-16 text-white' />
							<span className='tracking-[2px] font-light text-sm'>THE WEDDING OF</span>
							<h1 className='tracking-[2px] font-clicker text-4xl font-bold'>Nailal & Via</h1>
						</motion.div>
						<Button onClick={handleClick}>
							{loading ? (
								<Loading className='w-5 h-5 animate-spin' />
							) : (
								<div className='flex items-center space-x-2'>
									<Mail className='w-4 h-4 ' />
									<span>Open Invitation</span>
								</div>
							)}
						</Button>
					</div>
				</div>

				<p className='flex items-center justify-center font-medium h-[10vh]'>
					<span className='text-center'>
						Created with
						<Heart className='w-4 h-4 mx-1 text-red inline-block' />
						<Link href='#' className='hover:underline'>
							by Invitato
						</Link>
						<br />© 2023 Nailal & Via. All Rights Reserved
					</span>
				</p>
			</div>
		</motion.div>
	);
};

export default HomePage;
