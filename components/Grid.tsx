import React from 'react';
import DeviceImage from './DeviceImage';

interface Props {
	devices: Device[];
}

const Grid: React.FC<Props> = ({ devices }) => (
	<div className='grid grid-cols-3 gap-4'>
		{devices.map((device) => (
			<div key={device.id} className='card'>
				<DeviceImage device={device} w={84} h={84} />
				<h3>{device.product.name}</h3>
				<p>{device.line.name}</p>
			</div>
		))}
	</div>
);

export default Grid;
