'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useDrawer } from '@/hook/useDrawer';
import { Bird } from '@/components/icons';
import Link from 'next/link';

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

const Drawer: React.FC<DrawerProps> = ({ className, ...props }) => {
	const { open, setOpen } = useDrawer();

	return (
		<div
			className={cn(
				'w-full h-screen fixed bg-black/50 top-0 left-0 z-30 transition-all duration-300',
				open ? 'opacity-100' : 'opacity-0 pointer-events-none'
			)}
			onClick={() => setOpen(false)}>
			<div
				className={cn(
					'fixed top-0 right-0 w-[500px] h-screen bg-white transition-all duration-500 z-50 shadow-2xl ease-in-out',
					open ? 'translate-x-0' : 'translate-x-full',
					className
				)}
				{...props}>
				<div className='w-full p-10 h-full flex flex-col justify-between'>
					<div className='flex flex-col items-end text-choco'>
						<Bird className='w-16 h-16 fill-choco' />
						<ul className='w-full flex flex-col space-y-4 mt-8 text-end tracking-[2px] font-medium uppercase'>
							<li className='border border-transparent border-b-choco/10 py-2'>
								<Link href='#'>Groom & Bride</Link>
							</li>
							<li className='border border-transparent border-b-choco/10 py-2'>
								<Link href='#'>Wedding Details</Link>
							</li>
							<li className='border border-transparent border-b-choco/10 py-2'>
								<Link href='#'>RSVP</Link>
							</li>
							<li className='border border-transparent border-b-choco/10 py-2'>
								<Link href='#'>Live Streaming</Link>
							</li>
							<li className='border border-transparent border-b-choco/10 py-2'>
								<Link href='#'>Wedding Gift</Link>
							</li>
						</ul>
					</div>

					<p className='text-black text-sm text-end'>
						Created with Love by Invitato
						<br />
						2023 Nailal & Via. All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
