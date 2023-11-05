'use client';
import * as React from 'react';

export const AudioContext = React.createContext({
	playing: false,
	setPlaying: (playing: boolean) => {},
});

interface AudioProviderProps {
	children: React.ReactNode;
	src: string;
}

const AudioProvider: React.FC<AudioProviderProps> = ({ children, src }) => {
	const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null);
	const [playing, setPlaying] = React.useState(false);

	React.useEffect(() => {
		setAudio(new Audio(src));
	}, [src]);

	React.useEffect(() => {
		if (!audio) return;
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);

	React.useEffect(() => {
		if (!audio) return;
		audio.addEventListener(
			'ended',
			function () {
				this.currentTime = 0;
				this.play();
			},
			false
		);
		return () => {
			audio.removeEventListener(
				'ended',
				function () {
					this.currentTime = 0;
					this.play();
				},
				false
			);
		};
	}, [audio]);

	return <AudioContext.Provider value={{ playing, setPlaying }}>{children}</AudioContext.Provider>;
};

export default AudioProvider;
