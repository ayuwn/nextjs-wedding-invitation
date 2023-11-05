import { cn } from '@/lib/utils';
import React from 'react';

interface IconButtonProps extends React.HTMLAttributes<Omit<HTMLButtonElement, 'className' | 'children'>> {
	className?: string;
	children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ className, children, ...props }) => {
	return (
		<button
			className={cn(
				'h-8 w-8 rounded-full bg-choco-light text-white flex items-center justify-center hover:bg-black/60 transition-all duration-300',
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default IconButton;
