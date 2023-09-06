type RadioEntry = {
	gain: number;
	maxPower: number;
	maxSpeedMegabitsPerSecond: number;
};

type BioService = {
	configured: string;
	default: string;
};

type Device = {
	sysids: Array<string>;
	icon: {
		resolutions: Array<Array<string>>;
		id: string;
	};
	line: {
		name: string;
		id: string;
	};
	guids: Array<string>;
	uisp: {
		nameLegacy: string;
		bleServices: Array<string>;
		line: string;
		firmware: {
			platform: string | null;
			board: Array<string>;
		};
	};
	id: string;
	product: {
		abbrev: string;
		name: string;
	};
	shortnames: Array<string>;
	triplets: Array<string>;
	unifi?: {
		adoptability: string;
		network: {
			bleServices: Array<BioService>;
			chipset: string;
			deviceCapabilities: Array<string>;
			ethernetMaxSpeedMegabitsPerSecond: number;
			features: {
				bandsteer: boolean;
				ax: boolean;
				gen: number;
			};
			hybdrid: string;
			minimumFirmwareRequired: number;
			numberOfPorts: number;
			ports: {
				standard: number;
			};
			radios: {
				na: RadioEntry;
				ng: RadioEntry;
			};
			systemIdHexadecimal: string;
			type: string;
		};
	};
};

type DeviceListProps = {
	data?: {
		version: string;
		devices: Array<Device>;
	};
	error?: message;
};

interface Suggestion {
	deviceName: string;
	productName: string;
}
