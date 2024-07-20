const CallToAction = ({ text }: { text: string }) => {
	return (
		<div className="animate-bounce rounded-md bg-yellow-400 px-2 py-1">
			<div className="relative">
				<p className="text-sm font-light text-black">{text}</p>

				{/* Acute thingy in the bottom */}
				<div className="absolute top-0 -z-40 size-4 translate-x-7 translate-y-3 rotate-45 bg-yellow-400" />
			</div>
		</div>
	);
};

export default CallToAction;
