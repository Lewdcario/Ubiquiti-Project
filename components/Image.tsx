import React from 'react';
import NextImage from 'next/image';

interface Props {
	src: string;
	width?: number;
	height?: number;
	alt: string;
	className?: string;
}

const Image: React.FC<Props> = ({ src, width, height, alt, className }) => (
	<NextImage
		src={`${process.env.NEXT_PUBLIC_BASE_PATH}${src}`}
		width={width}
		height={height}
		alt={alt}
		className={className}
	/>
);

export default Image;
