import React, { useState } from 'react';
import Image from 'next/image';
import { GetStaticProps, InferGetStaticPropsType  } from 'next';
import { FaThLarge, FaList } from 'react-icons/fa';

type Device = {
	sysids: Array<string>,
	icon: {
		resolutions: Array<string>,
		id: string
	},
	line: {
		name: string,
		id: string
	},
	guids: Array<string>,
	uisp: {
		nameLegacy: string,
		bleServices: Array<string>,
		line: string,
		firmware: {
			platform: string | null,
			board: Array<string>
		}
	},
	id: string,
	product: {
		abbrev: string,
		name: string
	},
	shortnames: Array<string>,
	triplets: Array<string>
}

type DeviceListProps = {
	data: {
		version: string,
		devices: Array<Device>
	}
}


export const getStaticProps: GetStaticProps<DeviceListProps> = async () => {
	const data = await fetch('https://static.ui.com/fingerprint/ui/public.json').then(res => res.json()) as DeviceListProps['data'];
	return {
		props: { data }
	};
};


export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [searchTerm, setSearchTerm] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
	const itemsPerPage = 20;

	const filteredDevices = data.devices.filter(
		(device) =>
			device.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.line.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const pageCount = Math.ceil(filteredDevices.length / itemsPerPage);
	const devicesToShow = filteredDevices.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);


	// TODO: handle the icon schema chanigng. Maybe provide a max for the icon wxh and find that in the resolutions array, then default to the first one
	const imgURL = (device: Device) => `https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_${device.icon.resolutions[1][0]}x${device.icon.resolutions[1][1]}.png`;
	const image = (device: Device, w: number, h: number) => <Image src={imgURL(device)} alt={device.product.name} width={w} height={h} />;

	return (
		<div className="flex h-screen bg-gray-100">
			<div className="flex-1 p-10">
				<header className="flex justify-between items-center mb-8">
					<div className="flex items-center">
						<input
							type="text"
							className="p-2 border rounded"
							placeholder="Search..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<span className="ml-4 text-lg">{filteredDevices.length} Devices</span>
					</div>

					<div className="flex items-center">
						<Image src={data.devices[0].icon.resolutions[0]} alt="Row View" className="w-6 h-6 mr-2" />
						<Image src={data.devices[0].icon.resolutions[0]} alt="Grid View" className="w-6 h-6" />
					</div>

					<div className="flex justify-between items-center mb-4">
						<input 
							type="text" 
							placeholder="Search..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<div>
							<FaThLarge onClick={() => setViewMode('grid')} />
							<FaList onClick={() => setViewMode('table')} />
						</div>
					</div>

				</header>

				<main className="mt-10">
					{viewMode === 'table' ? (
						<table className="w-full">
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
										<td>
											{image(device, 24, 24)}
										</td>
										<td>{device.product.name}</td>
										<td>{device.line.name}</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<div className="grid grid-cols-3 gap-4">
							{devicesToShow.map((device) => (
								<div key={device.id} className="card">
									{image(device, 48, 48)}
									<h3>{device.product.name}</h3>
									<p>{device.line.name}</p>
								</div>
							))}
						</div>
					)}

					<footer className="mt-8">
						<button
							onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)}
						>
              Previous
						</button>
						<span className="mx-2">{currentPage}</span>
						<button
							onClick={() => setCurrentPage(currentPage < pageCount ? currentPage + 1 : currentPage)}
						>
              Next
						</button>
					</footer>
				</main>
			</div>
		</div>
	);
}
