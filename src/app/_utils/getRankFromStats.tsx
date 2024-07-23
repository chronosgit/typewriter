import Rank from '@/types/Rank';
import Stats from '@/types/Stats';

const getRankFromStats = (stats: Stats) => {
	const accuracy = stats.accuracy;
	let rank = null;

	if (accuracy <= 25) {
		rank = Rank.Snail;
	} else if (accuracy <= 50) {
		rank = Rank.Turtle;
	} else if (accuracy <= 75) {
		rank = Rank.Hippo;
	} else if (accuracy <= 75) {
		rank = Rank.Wolf;
	} else {
		rank = Rank.Leopard;
	}

	return rank;
};

export default getRankFromStats;
