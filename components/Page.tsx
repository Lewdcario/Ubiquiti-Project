import React from 'react';
import Header from './Header';

interface Props {
	children: React.ReactNode;
	theme?: 'light' | 'dark';
}

const Page: React.FC<Props> = ({ children }) => (
	<div className='h-screen bg-white'>
		<Header />
		<div className='py-4 px-10 overflow-hidden'>{children}</div>
	</div>
);

export default Page;
