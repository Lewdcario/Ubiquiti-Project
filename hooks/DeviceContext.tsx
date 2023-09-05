import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface Props {
	children: React.ReactNode;
}

type DeviceContextProps = {
	data: DeviceListProps['data'] | null;
	progress: number;
	error: string | null;
	loading: boolean;
};

const DeviceContext = createContext<DeviceContextProps | undefined>(undefined);

export const DeviceProvider: React.FC<Props> = ({ children }) => {
	const [data, setData] = useState<DeviceListProps['data'] | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);

				const response = await axios.get(
					'https://static.ui.com/fingerprint/ui/public.json',
					{
						onDownloadProgress: (event) => {
							const progress = Math.round(
								(100 * event.loaded) /
									(event.total ?? event.loaded)
							);
							setProgress(progress);
						}
					}
				);

				setData(response.data as DeviceListProps['data']);
			} catch (e: any) {
				setError(e.message);
				router.push('/error');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<DeviceContext.Provider value={{ data, progress, error, loading }}>
			{children}
		</DeviceContext.Provider>
	);
};

export const useDeviceData = (): DeviceContextProps => {
	const context = useContext(DeviceContext);
	if (!context) {
		throw new Error('useDeviceData must be used within a DeviceProvider');
	}
	return context;
};
