import React from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';
import Card from './Card';

interface Props {
	error?: string | null;
}

const Error: React.FC<Props> = ({ error }) => {
	return (
		<Card className='mx-auto my-auto'>
			<>
				<BiSolidErrorAlt className='mx-auto' size='3rem' />
				<div className='text-gray-900 font-bold text-xl mb-2'>
					There was an error...
				</div>
				<p className='text-gray-700 text-base'>
					{error || 'Something went wrong loading the page.'}
				</p>
			</>
		</Card>
	);
};

export default Error;
