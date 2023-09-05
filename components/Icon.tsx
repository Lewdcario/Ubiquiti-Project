import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Icon: React.FC<Props> = ({ children }) => (
	<button className='transition duration-100 p-1 rounded font-bold hover:bg-grey-light-2 text-grey-light-3 focus:border-2 focus:border-blue-dark-1'>
		{children}
	</button>
);

export default Icon;
