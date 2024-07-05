import Timer from '@/app/_components/timer/Timer';
import Stats from '@/app/_components/stats/Stats';

const Main = () => {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-screen-xl">
				<h3 className="mb-4 text-center font-extralight uppercase tracking-widest">
					Typing speed test
				</h3>

				<h2 className="mb-14 text-center text-6xl font-extrabold">
					Test your typing skills
				</h2>

				<div className="flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-24">
					<Timer seconds={0} />

					<Stats wordsPerMin={0} charsPerMin={0} accuracy={0} />
				</div>
			</div>
		</section>
	);
};

export default Main;
