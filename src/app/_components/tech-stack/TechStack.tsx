import techStack from "@/app/_utils/techStack";

const TechStack = () => {

	return (
		<section className="py-8 px-2">
			<h2 className="text-3xl font-bold">
				<span className="text-red-500">Typewriter </span>
				is <em>universal</em> service
			</h2>

			{/* Change below to infinite gallery */}
			<div className="p-8 w-full flex items-center gap-32">
				{
					techStack.map(t => <div className="scale-400">{t.icon}</div>)
				}
			</div>
		</section>
	);
};

export default TechStack;