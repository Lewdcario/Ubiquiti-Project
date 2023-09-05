import React, { useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FaThLarge, FaList } from 'react-icons/fa';
import { BiSolidErrorAlt } from 'react-icons/bi';
import TableLabel from '../components/TableLabel';
import Button from '../components/Button';
import Search from '../components/Search';
import Anchor from '../components/Anchor';
import DeviceImage from '../components/DeviceImage';

// TODO: Pagination + caching, think about speed and optimisation
// If the list changes more regularly then GetServerSideProps would be preferable here
export const getStaticProps: GetStaticProps<DeviceListProps> = async () => {
	try {
		const data = (await fetch(
			'https://static.ui.com/fingerprint/ui/public.json'
		).then((res) => res.json())) as DeviceListProps['data'];

		return {
			props: { data }
		};
	} catch (e: any) {
		if (process.env.NODE_ENV === 'production') {
			return { notFound: true }; // Excludes page from build
		}

		return { props: { error: e.message } };
	}
};

// TODO: Use the themes better instead of manually applying classes - light and dark themes. dark: / light: selector might do it tho
export default function Home({
	data,
	error
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
	const itemsPerPage = 20;

	const filteredDevices =
		data?.devices.filter((device) => {
			const search = searchTerm.toLowerCase();
			const productName = device.product.name.toLowerCase();
			const deviceName =
				device.shortnames[device.shortnames.length - 1].toLowerCase();
			return (
				deviceName.includes(search) ||
				deviceName.toLowerCase().includes(search) ||
				`${deviceName} ${productName}`.includes(search)
			);
		}) || [];

	const pageCount = Math.ceil(filteredDevices.length / itemsPerPage);
	const devicesToShow = filteredDevices.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	if (!data || error) {
		return (
			<div className='flex h-screen bg-gray-100'>
				<div className='w-[20rem] drop-shadow-lg mx-auto my-auto'>
					<div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'></div>
					<div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
						<div className='mb-8 text-center'>
							<BiSolidErrorAlt className='mx-auto' size='3rem' />
							<div className='text-gray-900 font-bold text-xl mb-2'>
								There was an error...
							</div>
							<p className='text-gray-700 text-base'>
								{error ||
									'Something went wrong loading the page.'}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='flex h-screen bg-gray-100'>
			<div className='flex-1 p-10'>
				<header className='flex justify-between items-center mb-8'>
					<Search
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						suggestions={data.devices.map((d) => ({
							productName: d.product.name,
							deviceName: d.shortnames[d.shortnames.length - 1]
						}))}
					/>

					<div className='flex items-center'>
						<FaThLarge onClick={() => setViewMode('grid')} />
						<FaList onClick={() => setViewMode('table')} />
					</div>
				</header>

				<main className='mt-10'>
					{viewMode === 'table' ? (
						<table className='w-full'>
							<thead>
								<tr>
									<th className='w-10'></th>
									<th className='text-left'>Product Line</th>
									<th className='text-left'>Name</th>
								</tr>
							</thead>
							<tbody>
								{devicesToShow.map((device) => (
									<tr key={device.id}>
										<TableLabel>
											<DeviceImage
												device={device}
												w={24}
												h={24}
											/>
										</TableLabel>
										<TableLabel>
											{device.line.name}
										</TableLabel>
										<TableLabel>
											<Anchor href='#'>
												{device.product.name}
											</Anchor>
										</TableLabel>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<div className='grid grid-cols-3 gap-4'>
							{devicesToShow.map((device) => (
								<div key={device.id} className='card'>
									<DeviceImage
										device={device}
										w={48}
										h={48}
									/>
									<h3>{device.product.name}</h3>
									<p>{device.line.name}</p>
								</div>
							))}
						</div>
					)}

					<footer className='mt-8'>
						<Button
							onClick={() =>
								setCurrentPage(
									currentPage > 1
										? currentPage - 1
										: currentPage
								)
							}
						>
							Previous
						</Button>
						<span className='mx-2'>{currentPage}</span>
						<Button
							onClick={() =>
								setCurrentPage(
									currentPage < pageCount
										? currentPage + 1
										: currentPage
								)
							}
						>
							Next
						</Button>
					</footer>
				</main>
			</div>
		</div>
	);
}
