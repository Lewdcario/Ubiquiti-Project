import { render, screen } from '@testing-library/react';
import React from 'react';
import { useRouter } from 'next/router';
import { DeviceProvider } from '@/hooks/DeviceContext';
import Home from '@/pages/index';

jest.mock('next/router', () => ({
	useRouter: jest.fn()
}));

describe('Home', () => {
	it('renders the Home page', () => {
		(useRouter as jest.Mock).mockReturnValue({
			route: '/'
		});

		render(
			<DeviceProvider>
				<Home />
			</DeviceProvider>
		);

		expect(screen.getByText('Devices')).toBeInTheDocument();
	});
});
