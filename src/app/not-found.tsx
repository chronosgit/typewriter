import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-4">
			<h1>
				Such page <span className="font-bold">doesn't exist</span>
			</h1>

			<Link
				href="/"
				className="text-blue-400 hover:text-blue-500 transition-colors"
			>
				Go home
			</Link>
		</div>
	);
};

export default NotFound;
