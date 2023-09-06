import React from 'react';
import Page from '@/components/Page';
import { useDeviceData } from '@/hooks/DeviceContext';
import Error from '@/components/Error';

const ErrorPage: React.FC = () => {
	const { error } = useDeviceData();
	return (
		<Page>
			<Error error={error} />
		</Page>
	);
};

export default ErrorPage;
