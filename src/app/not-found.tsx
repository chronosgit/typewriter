import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center gap-4">
			<h1>
				Such page <span className="font-bold">doesn't exist</span>
			</h1>

			<Link
				href="/"
				className="text-blue-400 transition-colors hover:text-blue-500"
			>
				Go home
			</Link>
		</div>
	);
};

export default NotFound;
