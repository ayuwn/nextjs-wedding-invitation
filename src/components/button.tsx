import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps extends React.HTMLAttributes<Omit<HTMLButtonElement, 'className' | 'children'>> {
	className?: string;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
	return (
		<button
			className={cn(
				'w-[150px] px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 rounded-full bg-blue/50 hover:bg-black/60 animate-breath flex items-center justify-center',
				className
			)}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
