import React from 'react';
import cx from 'classnames';

interface SharedProps {
	children: React.ReactNode;
	className?: string;
}

const CardTitle: React.FC<SharedProps> = ({ children, className }) => (
	<div className={`font-bold text-xl ${className}`}>{children}</div>
);

const CardBody: React.FC<SharedProps> = ({ children, className }) => (
	<div className={`text-center ${className}`}>{children}</div>
);

const CardFooter: React.FC<SharedProps> = ({ children, className }) => (
	<div className={`mt-auto ${className}`}>{children}</div>
);

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card: React.FC<CardProps> & {
	Title: typeof CardTitle;
	Body: typeof CardBody;
	Footer: typeof CardFooter;
} = ({ children, className }) => (
	<div
		className={cx(
			'bg-white flex flex-col justify-between leading-normal rounded',
			!className?.includes('w-') && 'w-[20rem]',
			!className?.includes('p-') && 'p-4',
			!className?.includes('m-') && 'm-2',
			!className?.includes('border-') && 'border-2',
			!className?.includes('drop-shadow') && 'drop-shadow-lg',
			!className?.includes('border-') && 'border-gray-400', // I recognise instead we should check for numbers or arbitrary values
			className
		)}
	>
		{children}
	</div>
);

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
