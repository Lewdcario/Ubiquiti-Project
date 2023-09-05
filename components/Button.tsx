import React, { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	disable?: boolean;
}

const Button: React.FC<Props> = ({
	children,
	className,
	disabled,
	...rest
}) => (
	<button
		className={cx(
			'transition duration-100 rounded p-2 font-bold',
			!className?.includes('bg-') && 'bg-grey-light-2',
			!className?.includes('text-') && 'text-dark',
			!className?.includes('hover:bg-') && 'hover:bg-grey-light-5',
			className
		)}
		disabled={disabled}
		{...rest}
	>
		{children}
	</button>
);

export default Button;
