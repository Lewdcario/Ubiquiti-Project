import React, { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CiGrid41 } from 'react-icons/ci';
import { useDeviceData } from '@/hooks/DeviceContext';
import Search from '@/components/Search';
import Page from '@/components/Page';
import Icon from '@/components/Icon';
import Table from '@/components/Table';
import Grid from '@/components/Grid';
import Spinner from '@/components/Spinner';

// TODO: Mobile + dark theme if I have time
// TODO: Animate sideways transition between pages?
// TODO: "4" and some other chars show up as a demo code for the font, maybe find an alternative or mention it in the interview

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('');
	const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
	const { data, loading } = useDeviceData();

	if (loading) {
		return (
			<Page>
				<Spinner />
			</Page>
		);
	}

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

	return (
		<Page>
			<div className='flex-1'>
				<div className='flex justify-between items-center mb-8'>
					<span className='flex space-x-4'>
						<Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							suggestions={
								data?.devices.map((d) => ({
									productName: d.product.name,
									deviceName:
										d.shortnames[d.shortnames.length - 1]
								})) || []
							}
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
				</div>

				<main className='mt-10'>
					{viewMode === 'table' ? (
						<Table devices={filteredDevices} />
					) : (
						<Grid devices={filteredDevices} />
					)}
				</main>
			</div>
		</Page>
	);
}
