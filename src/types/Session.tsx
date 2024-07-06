import OldWord from './OldWord';
import Stats from './Stats';
import TypedWord from './TypedWord';

interface Session {
	startedTyping: Boolean;
	remainingTime: number;
	curWord: string;
	typedWord: TypedWord;
	stats: Stats;
	oldWords: OldWord[];
	words: string[];
}

export default Session;
