import React from 'react';

interface HeartProps extends React.SVGProps<Omit<SVGElement, 'className'>> {
	className?: string;
}

const Heart: React.FC<HeartProps> = ({ className }) => {
	return (
		<svg
			stroke='currentColor'
			fill='currentColor'
			strokeWidth='0'
			version='1.2'
			baseProfile='tiny'
			viewBox='0 0 24 24'
			className={className}
			color='#fff'
			height='1em'
			width='1em'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M12 10.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375c0 1.127.159 2.784 1.75 4.375l7 5.25s5.409-3.659 7-5.25 1.75-3.248 1.75-4.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375' />
		</svg>
	);
};

export default Heart;
