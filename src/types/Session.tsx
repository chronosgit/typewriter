import OldWord from './FinishedWord';
import Stats from './Stats';
import TypedWord from './TypedWord';

interface Session {
	startedTyping: Boolean;
	remainingTime: number;
	curWordId: number;
	typedWord: TypedWord;
	stats: Stats;
	oldWords: OldWord[];
	words: string[];
	onComplete: () => void;
	onType: (char: string) => void;
	onBackspace: () => void;
}

export default Session;
