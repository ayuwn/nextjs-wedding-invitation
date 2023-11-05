import { cn } from '@/lib/utils';
import React from 'react';

interface OverlayProps extends React.HTMLAttributes<Omit<HTMLDivElement, 'className'>> {
	className?: string;
}

const Overlay: React.FC<OverlayProps> = ({ className, ...props }) => {
	return (
		<div
			className={cn('absolute top-0 left-0 w-full h-full pointer-events-none bg-blue/40', className)}
			{...props}></div>
	);
};

export default Overlay;
