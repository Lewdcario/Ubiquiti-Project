import React from 'react';
import Link from 'next/link';
import { BiSolidErrorAlt } from 'react-icons/bi';
import Page from '@/components/Page';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function NotFound() {
	return (
		<Page>
			<Card className='mx-auto my-auto'>
				<>
					<BiSolidErrorAlt className='mx-auto' size='3rem' />
					<div className='text-gray-900 font-bold text-xl mb-2'>
						Not Found
					</div>
					<p className='text-gray-700 text-base'>
						Could not find requested resource
					</p>
					<Button>
						<Link href='/'>Return Home</Link>
					</Button>
				</>
			</Card>
		</Page>
	);
}
