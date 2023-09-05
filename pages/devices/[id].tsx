import React from 'react';
import { useDeviceData } from '@/hooks/DeviceContext';
import Spinner from '@/components/Spinner';
import Page from '@/components/Page';

interface Props {
	id: string;
}

const DeviceView: React.FC<Props> = ({ id }) => {
	const { data, loading, error } = useDeviceData();

	if (loading) {
		return (
			<Page>
				<Spinner />
			</Page>
		);
	}

	if (!data || error) {
		return <p>:(</p>;
	}

	const device = data.devices.find((device) => device.id === id);
	if (!device) {
		return <p>:((</p>;
	}

	return (
		<Page>
			<p>{device.id}</p>
		</Page>
	);
};

export default DeviceView;
