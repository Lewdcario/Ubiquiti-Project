import React, { MouseEvent } from 'react';

interface Props {
	onClick: (event: MouseEvent<HTMLDivElement>) => void;
	children: React.ReactNode;
	className?: string;
}

const Clickable: React.FC<Props> = ({ onClick, children, className }) => (
	<div
		onClick={onClick}
		className={`cursor-pointer focus:border-blue-dark-1 focus:my-2 ${className}`}
	>
		{children}
	</div>
);

export default Clickable;
