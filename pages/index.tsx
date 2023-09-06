import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { CiGrid41 } from 'react-icons/ci';
import { useDeviceData } from '@/hooks/DeviceContext';
import Search from '@/components/Search';
import Page from '@/components/Page';
import Icon from '@/components/Icon';
import Table from '@/components/Table';
import Grid from '@/components/Grid';
import Spinner from '@/components/Spinner';
import SiteHead from '@/components/SiteHead';
import CheckboxDropdown from '@/components/CheckboxDropdown';

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('');
	const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
	const { data, loading } = useDeviceData();
	const [checkedLines, setCheckedLines] = useState<Record<string, boolean>>(
		{}
	);

	const updateFilteredDevices = (newCheckedLines: {
		[key: string]: boolean;
	}) => {
		setCheckedLines(newCheckedLines);
	};

	const baseFilteredDevices =
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

	const allUnticked = Object.values(checkedLines).every(
		(val) => val === false
	);
	const filteredDevices = baseFilteredDevices.filter((device) => {
		if (allUnticked) return true;
		return checkedLines[device.line.name];
	});

	const productLines = Array.from(
		new Set(baseFilteredDevices.map((device) => device.line.name) || [])
	);

	useEffect(() => {
		if (data) {
			const initialCheckedLines: Record<string, boolean> = {};
			data.devices.forEach((device) => {
				initialCheckedLines[device.line.name] = true;
			});
			setCheckedLines(initialCheckedLines);
		}
	}, [data]);

	if (loading) {
		return (
			<Page>
				<Spinner />
			</Page>
		);
	}

	return (
		<Page>
			<SiteHead title='Devices' />
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
					<div className='flex items-center space-x-1 text-grey-dark-1'>
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
						<CheckboxDropdown
							title='Filter'
							items={productLines}
							onChange={updateFilteredDevices}
						/>
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
