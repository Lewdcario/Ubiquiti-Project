import '/public/globals.css';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name='theme-color' content='#2986CC' />
				<meta
					content='width=device-width, initial-scale=1.0, maximum-scale=5.0'
					name='viewport'
				/>
				<meta name='HandheldFriendly' content='true' />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
