import OldWord from './OldWord';
import Stats from './Stats';

interface Session {
	startedTyping: Boolean;
	remainingTime: number;
	curWord: string;
	typedWord: string;
	stats: Stats;
	oldWords: OldWord[];
	words: string[];
}

export default Session;
