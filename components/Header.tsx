import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => (
	<header className='bg-grey-light-4 h-18 flex justify-between items-center text-grey-light-3 p-5'>
		<div className='flex items-center'>
			<Image src='/logo.svg' width={24} height={24} alt='Logo' />
			<span className='ml-5'>Devices</span>
		</div>
		<div>
			<a
				href='https://github.com/Lewdcario'
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center'
			>
				<span>okami.codes</span>
				<Image
					src='/github.svg'
					width={24}
					height={24}
					alt='Github Logo'
					className='ml-5'
				/>
			</a>
		</div>
	</header>
);

export default Header;
