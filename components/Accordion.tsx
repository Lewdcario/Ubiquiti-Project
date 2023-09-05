import React from 'react';

interface AccordionProps {
	isOpen: boolean;
	onClick: () => void;
	title: React.ReactNode | string;
	children: React.ReactNode | string;
}

const Accordion: React.FC<AccordionProps> = ({
	isOpen,
	onClick,
	title,
	children
}) => {
	return (
		<div className='accordion-item'>
			<h2 className='accordion-header' onClick={onClick}>
				<button
					className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
					type='button'
				>
					{title}
				</button>
			</h2>
			<div
				className={`accordion-collapse ${isOpen ? 'show' : 'collapse'}`}
			>
				<div className='accordion-body'>{children}</div>
			</div>
		</div>
	);
};

export default Accordion;
