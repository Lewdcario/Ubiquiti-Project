import React from 'react';
import Image from 'next/image';

interface Props {
	device: Device;
	w?: number;
	h?: number;
}

const DeviceImage: React.FC<Props> = ({ device, w, h }) => {
	let width: number, height: number;
	if (w && h) {
		// Find closest match in device.icon.resolutions
		[width, height] = device.icon.resolutions
			.find((res: string[]) => {
				const [w, h] = res.map((n: string) => Number(n));
				return w >= w && h >= h;
			})
			?.map((n: string) => Number(n)) || [48, 48];
	} else {
		// Use the first resolution
		[width, height] = device.icon.resolutions[0].map((n: string) =>
			Number(n)
		) || [48, 48];
	}

	return (
		<Image
			src={`https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_${width}x${height}.png`}
			alt={device.product.name}
			width={width}
			height={height}
		/>
	);
};

export default DeviceImage;
