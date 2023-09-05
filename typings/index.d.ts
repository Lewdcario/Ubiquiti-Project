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
};

type DeviceListProps = {
	data?: {
		version: string;
		devices: Array<Device>;
	};
	error?: message;
};
