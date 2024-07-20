import { useEffect } from 'react';
import KeyDownHandler from '@/types/KeyDownHandler';
import TypedWord from '@/types/TypedWord';

interface Args {
	onComplete: () => void;
	onBackspace: () => void;
	onType: (char: string) => void;
	startedTyping: Boolean;
	activeWord: string;
	typedWord: TypedWord;
}

const useKeyboard = ({ onComplete, onType, onBackspace, startedTyping, activeWord, typedWord,  }: Args) => {
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
	}, [startedTyping, activeWord, typedWord,]);
};

export default useKeyboard;
