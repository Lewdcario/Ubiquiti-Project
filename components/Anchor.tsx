
import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

const CustomAnchor: React.FC<Props> = ({ href, children }) => (
	<a
		href={href}
		className='text-blue-dark-1 hover:text-blue-dark-2 focus:border focus:border-blue-dark-1 focus:my-2'
	>
		{children}
	</a>
);

export default CustomAnchor;
