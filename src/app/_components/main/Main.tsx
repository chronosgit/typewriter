import Timer from '@/app/_components/timer/Timer';
import Stats from '@/app/_components/stats/Stats';
import Field from '@/app/_components/field/Field';
import FinishScreen from '@/app/_components/finish_screen/FinishScreen';
import { SessionContextProvider } from '@/contexts/session/SessionContext';

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

				<SessionContextProvider>
					<>
						<div className="mb-24 flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-24">
							<Timer />

							<Stats />

							<FinishScreen />
						</div>

						<Field />
					</>
				</SessionContextProvider>
			</div>
		</section>
	);
};

export default Main;
