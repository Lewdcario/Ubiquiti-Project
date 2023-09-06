import React from 'react';
import Link from 'next/link';

interface Props {
	href: string;
	children: React.ReactNode;
	className?: string;
}

const Anchor: React.FC<Props> = ({ href, children, className }) => (
	<div className={`focus:border-blue-dark-1 focus:my-2 ${className}`}>
		<Link href={href}>{children}</Link>
	</div>
);

export default Anchor;
