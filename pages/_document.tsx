import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<base href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
