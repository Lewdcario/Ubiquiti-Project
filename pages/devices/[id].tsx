import React from 'react';
import { useRouter } from 'next/router';
import { useDeviceData } from '@/hooks/DeviceContext';
import Spinner from '@/components/Spinner';
import Page from '@/components/Page';

interface Props {
	id: string;
}

const DeviceView: React.FC<Props> = () => {
	const { data, loading } = useDeviceData();
	const router = useRouter();
	const id = router.query.id as string;

	if (loading) {
		return (
			<Page>
				<Spinner />
			</Page>
		);
	}

	const device = data?.devices.find((device) => device.id === id);
	if (!device) {
		router.push('/not-found');
		return null;
	}

	return (
		<Page>
			<p>{device.id}</p>
		</Page>
	);
};

export default DeviceView;
