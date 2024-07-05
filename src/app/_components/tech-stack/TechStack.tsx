import techStack from "@/app/_utils/techStack";

const TechStack = () => {

	return (
		<section className="">
			<div className="w-full flex items-center gap-4">
				{
					techStack.map(t => <div className="scale-400">{t.icon}</div>)
				}
			</div>
		</section>
	);
};

export default TechStack;