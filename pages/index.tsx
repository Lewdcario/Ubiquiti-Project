import React, { useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CiGrid41 } from 'react-icons/ci';
import { BiSolidErrorAlt } from 'react-icons/bi';
import TableLabel from '../components/TableLabel';
import Search from '../components/Search';
import Anchor from '../components/Anchor';
import DeviceImage from '../components/DeviceImage';
import Page from '../components/Page';
import Icon from '../components/Icon';

// TODO: Component and grid tables
// TODO: "4" and some other chars show up as a demo code for the font, maybe find an alternative or mention it in the interview
// TODO: Instead of server fetching, could use frontend and axios to use the progress bar... an then the stuff below this too
// TODO: getStaticProps is deprecated / an anti-pattern now? https://javascript.works-hub.com/learn/nextjs-version-13-whats-new-bbbd3
// TODO: Pagination + caching, think about speed and optimisation - https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
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

// TODO: Lint-staged isn't submitting the linted files, just leaving it unstaged
export default function Home({
	data,
	error
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [searchTerm, setSearchTerm] = useState('');
	const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

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

	if (!data || error) {
		return (
			<Page>
				<div className='w-[20rem] drop-shadow-lg mx-auto my-auto'>
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
			</Page>
		);
	}

	return (
		<Page>
			<div className='flex-1'>
				<header className='flex justify-between items-center mb-8'>
					<span className='flex space-x-4'>
						<Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							suggestions={data.devices.map((d) => ({
								productName: d.product.name,
								deviceName:
									d.shortnames[d.shortnames.length - 1]
							}))}
						/>

						<div className='my-auto text-grey-light-5'>
							{filteredDevices.length} Devices
						</div>
					</span>

					<div className='flex items-center space-x-1'>
						<Icon>
							<AiOutlineUnorderedList
								size='20px'
								onClick={() => setViewMode('table')}
							/>
						</Icon>
						<Icon>
							<CiGrid41
								size='20px'
								onClick={() => setViewMode('grid')}
							/>
						</Icon>
					</div>
				</header>

				<main className='mt-10'>
					{viewMode === 'table' ? (
						<div className='h-[84.9vh] overflow-y-auto hide-scrollbar'>
							<table className='table-auto w-full'>
								<thead className='sticky top-0 bg-white'>
									<tr>
										<th className='w-[2%] sticky top-0'></th>
										<th className='text-left w-[43%] sticky top-0'>
											Product Line
										</th>
										<th className='text-left w-auto sticky top-0'>
											Name
										</th>
									</tr>
								</thead>
								<tbody className='overflow-y-auto'>
									{filteredDevices.map((device) => (
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
						</div>
					) : (
						<div className='grid grid-cols-3 gap-4'>
							{filteredDevices.map((device) => (
								<div key={device.id} className='card'>
									<DeviceImage
										device={device}
										w={84}
										h={84}
									/>
									<h3>{device.product.name}</h3>
									<p>{device.line.name}</p>
								</div>
							))}
						</div>
					)}
				</main>
			</div>
		</Page>
	);
}
