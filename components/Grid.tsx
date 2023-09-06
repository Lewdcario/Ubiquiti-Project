import React from 'react';
import DeviceImage from './DeviceImage';
import Card from './Card';
import Anchor from './Anchor';

interface Props {
	devices: Device[];
}

const Grid: React.FC<Props> = ({ devices }) => {
	return (
		<div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 overflow-y-auto h-[84.9vh]'>
			{devices.map((device) => (
				<div
					key={device.id}
					className='rounded-xl border-grey-light-2 border-[2px] p-0'
				>
					<Card className='w-full p-0 m-0 drop-shadow-none border-0 rounded-xl'>
						<Card.Body className='overflow-hidden rounded-xl'>
							<div className='relative bg-grey-light-6 rounded-x py-4'>
								<DeviceImage
									className='mx-auto'
									device={device}
									w={120}
									h={120}
								/>
								<div className='absolute top-0 right-0 text-blue-dark-2 bg-white rounded p-2 m-1'>
									{device.line.name}
								</div>
							</div>
						</Card.Body>

						<Card.Footer>
							<div className='mt-4 text-left space-y-4 p-2'>
								<Anchor
									href={`/devices/${device.id}`}
									className='font-semibold'
								>
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
				</div>
			))}
		</div>
	);
};

export default Grid;
