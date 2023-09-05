import React from 'react';

interface Props {
	label: string;
}

const Checkbox: React.FC<Props> = ({ label }) => (
	<div className='flex items-center'>
		<input
			type='checkbox'
			className='rounded-full border-1 border-grey-light-1 hover:border-blue-dark-1 focus:ring focus:ring-blue-dark-1 focus:ring-offset-1'
		/>
		<label className='ml-auto'>{label}</label>
	</div>
);

export default Checkbox;
