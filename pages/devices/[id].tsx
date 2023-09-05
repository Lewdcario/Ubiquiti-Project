import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useDeviceData } from '@/hooks/DeviceContext';
import Spinner from '@/components/Spinner';
import Page from '@/components/Page';
import Card from '@/components/Card';
import DeviceImage from '@/components/DeviceImage';
import Clickable from '@/components/Clickable';
import Accordion from '@/components/Accordion';
import Button from '@/components/Button';

const DeviceView = () => {
	const router = useRouter();
	const { data, loading } = useDeviceData();
	const [showJSON, setShowJSON] = useState(false);
	const [deviceIndex, setDeviceIndex] = useState<number | null>(null);
	const [device, setDevice] = useState<Device | null>(null);

	const id = router.query.id as string;
	const region = 'na'; // TODO: Get region from context
	const canGoBack = Boolean(data && deviceIndex !== null && deviceIndex > 0);
	const canGoForward = Boolean(
		data && deviceIndex !== null && deviceIndex < data.devices.length - 1
	);

	useEffect(() => {
		if (data && deviceIndex === null) {
			const index = data.devices.findIndex((d) => d.id === id);
			setDeviceIndex(index);
			const found = data.devices[index] as Device;
			if (found) setDevice(found);
		}
	}, [data, deviceIndex, id, setDevice]);

	// TODO: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
	if (loading || deviceIndex === null || !data || !device) {
		return (
			<Page>
				<Spinner />
			</Page>
		);
	}

	if (!device && deviceIndex === -1) {
		// TODO: The button here is slow, maybe add a loading indicator
		router.push('/not-found');
		return null;
	}

	const nextPage = () => {
		if (deviceIndex + 1 < data.devices.length) {
			router.push(`/devices/${data.devices[deviceIndex + 1].id}`);
			const found = data.devices[deviceIndex + 1] as Device;
			if (found) {
				setDeviceIndex(deviceIndex + 1);
				setDevice(found);
			}
		}
	};

	const prevPage = () => {
		if (deviceIndex - 1 >= 0) {
			router.push(`/devices/${data.devices[deviceIndex - 1].id}`);
			const found = data.devices[deviceIndex - 1] as Device;
			if (found) {
				setDeviceIndex(deviceIndex - 1);
				setDevice(found);
			}
		}
	};

	return (
		<Page>
			<div>
				<div className='flex justify-between'>
					<div className='flex items-center'>
						<Button
							className='bg-none hover:bg-grey-light-2 text-grey-dark-1'
							onClick={() => router.back()}
						>
							<div className='flex'>
								<BsChevronLeft className='mr-2 my-auto' />
								Back
							</div>
						</Button>
					</div>
					<div className='flex justify-end items-center space-x-2'>
						<Button
							className='bg-none hover:bg-grey-light-2 text-grey-dark-1'
							onClick={prevPage}
							disabled={!canGoBack}
						>
							<BsChevronLeft className='mr-2' />
						</Button>
						<Button
							className='bg-none hover:bg-grey-light-2 text-grey-dark-1'
							onClick={nextPage}
							disabled={!canGoForward}
						>
							<BsChevronRight className='ml-2' />
						</Button>
					</div>
				</div>

				<Card className='mx-auto my-auto w-[736px] p-0 border-0 drop-shadow-none'>
					<div className='flex w-full'>
						<div className='w-[40%] bg-gray-light-6'>
							<DeviceImage device={device} w={250} h={250} />
						</div>
						<div className='w-[100%] ml-5'>
							<div>
								<h1 className='text-xl font-bold text-left'>
									{device.product.name}
								</h1>
								<small className='text-grey-light-1 text-left'>
									{device.line.name}
								</small>
							</div>

							<div className='my-3 space-y-2'>
								<div className='flex justify-between'>
									<small className='font-semibold'>
										Product Line:
									</small>
									<small className='text-grey-light-1'>
										{device.line.name}
									</small>
								</div>
								<div className='flex justify-between'>
									<small className='font-semibold'>ID:</small>
									<small className='text-grey-light-1'>
										{device.line.id}
									</small>
								</div>
								<div className='flex justify-between'>
									<small className='font-semibold'>
										Name:
									</small>
									<small className='text-grey-light-1'>
										{device.product.name}
									</small>
								</div>
								<div className='flex justify-between'>
									<small className='font-semibold'>
										Short Name:
									</small>
									<small className='text-grey-light-1'>
										{device.shortnames[0]}
									</small>
								</div>
								{device.unifi && (
									<>
										<div className='flex justify-between'>
											<small className='font-semibold'>
												Max Power:
											</small>
											<small className='text-grey-light-1'>
												{
													device.unifi.network.radios[
														region
													].maxPower
												}{' '}
												W
											</small>
										</div>
										<div className='flex justify-between'>
											<small className='font-semibold'>
												Speed:
											</small>
											<small className='text-grey-light-1'>
												{
													device.unifi.network.radios[
														region
													].maxSpeedMegabitsPerSecond
												}{' '}
												Mbps
											</small>
										</div>
										<div className='flex justify-between'>
											<small className='font-semibold'>
												Number of Ports:
											</small>
											<small className='text-grey-light-1'>
												{
													device.unifi.network
														.numberOfPorts
												}
											</small>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</Card>

				<div className='my-4 text-center overflow-y-auto'>
					<Accordion
						isOpen={showJSON}
						onClick={() => setShowJSON(!showJSON)}
						title={
							<Clickable onClick={() => {}}>
								<p className='text-blue-dark-2'>
									See All Details as JSON
								</p>
							</Clickable>
						}
					>
						<pre className='text-left overflow-x-auto max-w-full max-h-[30rem] bg-grey-light-2 rounded p-2'>
							{JSON.stringify(device, null, 2)}
						</pre>
					</Accordion>
				</div>
			</div>
		</Page>
	);
};

export default DeviceView;
