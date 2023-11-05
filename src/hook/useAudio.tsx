import * as React from 'react';
import { AudioContext } from '@/provider/audioProvider';

export const useAudio = () => React.useContext(AudioContext);
