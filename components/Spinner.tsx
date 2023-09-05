import React from 'react';

interface Props {
	className?: string;
}

const Spinner: React.FC<Props> = ({ className }) => (
	<div
		className={`inline-block mx-auto h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`}
		role='status'
	>
		<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
			Loading...
		</span>
	</div>
);

export default Spinner;
