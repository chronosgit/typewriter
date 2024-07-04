'use client';

import { FC } from 'react';

interface Props {
	error: Error & { digest?: string },
	reset: () => void,
};	

const GlobalError: FC<Props> = ({error, reset}) => {
	return (
		<html>
			<body>
				<h1>Error has occured: {error.message}</h1>

				<button onClick={() => reset()}>
					Try again.
				</button>
			</body>
		</html>
	);
};

export default GlobalError;