'use client';

import Image from 'next/image';
import * as React from 'react';

import Overlay from '@/components/overlay';
import Separator from '@/components/separator';
import { Variants, motion } from 'framer-motion';

interface WelcomeProps {
	//
}

const Welcome: React.FC<WelcomeProps> = ({}) => {
	const fadeUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
	} as Variants;

	return (
		<motion.div
			className='relative w-full h-full bg-blue'
			exit={{ opacity: 0, y: 20 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}>
			<motion.div
				className='relative'
				variants={fadeUp}
				initial='initial'
				animate='animate'
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				<Overlay />
				<Separator className='absolute bottom-0 left-0 w-full' />
				<Image src='/images/test.jpeg' alt='hero' width={1920} height={950} className='object-cover w-full' />
			</motion.div>

			<motion.div
				className='p-10'
				variants={fadeUp}
				initial='initial'
				animate='animate'
				transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
				<h1 className='text-xl font-bold text-center text-white font-clicker'>
					Dear Mr/Mrs/Ms,
					<br />
					Family & Friends
				</h1>
				<p className='text-sm font-medium text-center text-white'>
					We are pleased to announce and invite you to our wedding. We sincerely hope that you will be able to
					attend and pray directly on our wedding day. Your presence will mean a lot to us.
				</p>
			</motion.div>
		</motion.div>
	);
};

export default Welcome;
