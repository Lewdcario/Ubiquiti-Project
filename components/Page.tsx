import React from 'react';
import Header from './Header';

interface Props {
	children: React.ReactNode;
	theme?: 'light' | 'dark';
}

// TODO: Use the theme prop instead of manually applying classes - light and dark themes. dark: / light: selector might do it tho
const Page: React.FC<Props> = ({ children }) => (
	<>
		<Header />
		<div className='flex bg-white py-4 px-10 overflow-hidden'>
			{children}
		</div>
	</>
);

export default Page;
