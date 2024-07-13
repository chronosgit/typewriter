import { useEffect } from 'react';
import KeyDownHandler from '@/types/KeyDownHandler';

interface Args {
	onComplete: () => void;
	onBackspace: () => void;
	onType: (char: string) => void;
}

const useKeyboard = ({ onComplete, onType, onBackspace }: Args) => {
	useEffect(() => {
		const downHandler: KeyDownHandler = event => {
			const { key } = event;

			if (key === 'Enter' || key === ' ') {
				onComplete();
			} else if (key === 'Backspace') {
				onBackspace();
			} else if (key.length === 1 && /^[a-zA-Z0-9]$/.test(key)) {
				onType(key);
			}
		};

		window.addEventListener('keydown', downHandler);

		return () => {
			window.removeEventListener('keydown', downHandler);
		};
	}, []);
};

export default useKeyboard;
