import { Clicker_Script, Jost } from 'next/font/google';

export const clicker = Clicker_Script({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-clicker-script',
});

export const jost = Jost({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-jost',
});
