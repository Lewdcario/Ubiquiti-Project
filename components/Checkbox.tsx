import React from 'react';

interface Props {
	label: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

const Checkbox: React.FC<Props> = ({ label, checked, onChange, className }) => (
	<div className='flex items-center space-x-3'>
		<input
			type='checkbox'
			className={`border-1 border-grey-light-1 hover:bg-blue-dark-1 rounded-lg ${className}`}
			checked={checked}
			onChange={onChange}
		/>
		<label className='text-grey-dark-2'>{label}</label>
	</div>
);

export default Checkbox;
