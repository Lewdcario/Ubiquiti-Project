import React from 'react';
import TableLabel from './TableLabel';
import Anchor from './Anchor';
import DeviceImage from './DeviceImage';

interface Props {
	devices: Device[];
}

const Table: React.FC<Props> = ({ devices }) => (
	<div className='h-[84.9vh] overflow-y-auto hide-scrollbar'>
		<table className='table-auto w-full'>
			<thead className='sticky top-0 bg-white'>
				<tr>
					<th className='w-[2%] sticky top-0'></th>
					<th className='text-left w-[43%] sticky top-0'>
						Product Line
					</th>
					<th className='text-left w-auto sticky top-0'>Name</th>
				</tr>
			</thead>
			<tbody className='overflow-y-auto'>
				{devices.map((device) => (
					<tr key={device.id}>
						<TableLabel>
							<DeviceImage device={device} w={24} h={24} />
						</TableLabel>
						<TableLabel>{device.line.name}</TableLabel>
						<TableLabel>
							<Anchor href={`/devices/${device.id}`}>
								{device.product.name}
							</Anchor>
						</TableLabel>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default Table;
