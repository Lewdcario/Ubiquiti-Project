import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => (
	<div className='w-[20rem] drop-shadow-lg mx-auto my-auto'>
		<div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
			<div className='mb-8 text-center'>{children}</div>
		</div>
	</div>
);

export default Button;
