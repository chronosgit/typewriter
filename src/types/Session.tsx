import OldWord from './FinishedWord';
import Stats from './Stats';
import TypedWord from './TypedWord';

interface Session {
	startedTyping: Boolean;
	stats: Stats;
	remainingTime: number | null;
	activeWord: string;
	activeWordRemovedPart: string;
	typedWord: TypedWord;
	finishedWords: OldWord[];
	words: string[];
	onComplete: () => void;
	onType: (char: string) => void;
	onBackspace: () => void;
}

export default Session;
