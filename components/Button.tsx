import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...rest }) => (
	<button className='transition duration-200 rounded p-2 font-bold bg-grey-light-2 text-dark hover:bg-grey-dark-1' {...rest}>
		{children}
	</button>
);

export default Button;
