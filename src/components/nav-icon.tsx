'use client';

import * as React from 'react';
import { useAudio } from '@/hook/useAudio';
import { cn } from '@/lib/utils';
import { ListIcon, Pause, Play } from 'lucide-react';
import IconButton from './icon-button';
import { useDrawer } from '@/hook/useDrawer';

interface NavIconProps extends React.HTMLAttributes<Omit<HTMLDivElement, 'className'>> {
	className?: string;
}

const NavIcon: React.FC<NavIconProps> = ({ className, ...props }) => {
	const { playing, setPlaying } = useAudio();
	const { open, setOpen } = useDrawer();

	return (
		<div className={cn('flex items-center justify-center space-x-2', className)} {...props}>
			<IconButton onClick={() => setOpen(!open)}>
				<ListIcon className='w-4 h-4' />
			</IconButton>
			<IconButton onClick={() => setPlaying(!playing)}>
				{playing ? <Pause className='w-4 h-4' /> : <Play className='w-4 h-4' />}
			</IconButton>
		</div>
	);
};

export default NavIcon;
