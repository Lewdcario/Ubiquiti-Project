import React from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';

interface Props {
	error?: string | null;
}

const Error: React.FC<Props> = ({ error }) => {
	return (
		<div className='w-[20rem] drop-shadow-lg mx-auto my-auto'>
			<div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
				<div className='mb-8 text-center'>
					<BiSolidErrorAlt className='mx-auto' size='3rem' />
					<div className='text-gray-900 font-bold text-xl mb-2'>
						There was an error...
					</div>
					<p className='text-gray-700 text-base'>
						{error || 'Something went wrong loading the page.'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Error;
