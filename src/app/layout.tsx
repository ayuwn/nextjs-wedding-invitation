import './globals.css';

import type { Metadata } from 'next';
import { clicker, jost } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import AudioProvider from '@/provider/audioProvider';
import DrawerProvider from '@/provider/drawerProvider';
import Drawer from '@/components/drawer';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={cn(clicker.variable, jost.variable)}>
			<body className='font-jost'>
				<AudioProvider src='/audio/song.mp4'>
					<DrawerProvider>
						<Drawer />
						{children}
					</DrawerProvider>
				</AudioProvider>
			</body>
		</html>
	);
}