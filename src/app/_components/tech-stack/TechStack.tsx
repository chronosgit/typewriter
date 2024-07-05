import GalleryInfinite from '@/components/gallery-infinite/GalleryInfinite';
import techStack from '@/app/_utils/techStack';

const TechStack = () => {
	return (
		<section className="pt-8 pb-16 px-2">
			<h2 className="mb-8 text-center text-3xl font-bold">
				<span className="text-red-500">Typewriter </span>
				is <em>universal</em> service
			</h2>

			<GalleryInfinite 
				items={techStack} 
				tailwindWrapperRules="p-8 w-full flex items-center gap-32"
				tailwindChildRules="scale-400"
			/>
		</section>
	);
};

export default TechStack;
