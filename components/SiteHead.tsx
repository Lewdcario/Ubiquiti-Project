import React from 'react';
import Head from 'next/head';

interface Props {
	title?: string;
}

const SiteHead: React.FC<Props> = ({ title }) => {
	const mainTitle = 'Project for Ubiquiti';
	const mainDescription = 'Some fancy description may go here.';

	return (
		<Head>
			{title ? <title>{title}</title> : <title>Ubiquiti Project</title>}

			<link rel='icon' href='favicon.ico' />

			<meta name='description' content={mainDescription} />

			{/* Facebook Meta Tags */}
			<meta
				property='og:url'
				content={process.env.NEXT_PUBLIC_WEBSITE_URL}
			/>
			<meta property='og:type' content='website' />
			<meta property='og:title' content={mainTitle} />
			<meta property='og:description' content={mainDescription} />
			<meta property='og:image' content='logo.svg' />

			{/* Twitter Meta Tags */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta
				property='twitter:domain'
				content={process.env.NEXT_PUBLIC_DOMAIN}
			/>
			<meta
				property='twitter:url'
				content={process.env.NEXT_PUBLIC_WEBSITE_URL}
			/>
			<meta name='twitter:title' content={mainTitle} />
			<meta name='twitter:description' content={mainDescription} />
			<meta
				name='twitter:image'
				content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/logo.svg`}
			/>

			{/* //Meta Tags Generated via https://www.opengraph.xyz */}
		</Head>
	);
};

export default SiteHead;
