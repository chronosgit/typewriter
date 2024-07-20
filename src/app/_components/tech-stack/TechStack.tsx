import GalleryInfinite from '@/components/gallery-infinite/GalleryInfinite';
import techStack from '@/app/_utils/techStack';

const TechStack = () => {
	return (
		<section className="px-2 pb-16 pt-8">
			<h2 className="mb-10 text-center text-3xl font-bold">
				<span className="text-red-500">Typewriter </span>
				is <em>universal</em> service
			</h2>

			<GalleryInfinite>
				{techStack.map((t, i) => {
					return (
						<div key={t.id || i} className="mr-56 scale-400 p-6">
							{t.icon}
						</div>
					);
				})}
			</GalleryInfinite>
		</section>
	);
};

export default TechStack;
