import React from 'react';
import DeviceImage from './DeviceImage';
import Card from './Card';
import Anchor from './Anchor';

interface Props {
	devices: Device[];
}

const Grid: React.FC<Props> = ({ devices }) => {
	return (
		<div className='grid grid-cols-4 gap-4 overflow-y-auto h-[84.9vh]'>
			{devices.map((device) => (
				<Card key={device.id} className='p-0 border-0 drop-shadow-none'>
					<Card.Body>
						<div className='relative bg-gray-light-6'>
							<DeviceImage
								className='mx-auto'
								device={device}
								w={120}
								h={120}
							/>
							<div className='absolute top-0 right-0 text-blue-dark-2'>
								{device.line.name}
							</div>
						</div>
					</Card.Body>
					<Card.Footer>
						<div className='mt-4 text-left space-y-2'>
							<Anchor href={`/devices/${device.id}`}>
								{device.product.name}
							</Anchor>
							<div className='text-grey-dark-1'>
								{
									device.shortnames[
										device.shortnames.length - 1
									]
								}
							</div>
						</div>
					</Card.Footer>
				</Card>
			))}
		</div>
	);
};

export default Grid;
