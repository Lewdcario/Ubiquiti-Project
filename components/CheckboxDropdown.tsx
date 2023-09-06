import React, { useState } from 'react';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Clickable from '@/components/Clickable';

type CheckboxDropdownProps = {
	title: string;
	items: Array<string>;
	onChange: (checkedItems: { [key: string]: boolean }) => void;
};

const CheckboxDropdown: React.FC<CheckboxDropdownProps> = ({
	title,
	items,
	onChange
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [checkedItems, setCheckedItems] = useState<{
		[key: string]: boolean;
	}>({});

	const handleCheckboxChange = (item: string, checked: boolean) => {
		const newCheckedItems = {
			...checkedItems,
			[item]: checked
		};
		setCheckedItems(newCheckedItems);
		onChange(newCheckedItems);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const resetCheckedItems = () => {
		const resetItems = Object.fromEntries(
			Object.keys(checkedItems).map((key) => [key, false])
		);
		setCheckedItems(resetItems);
		onChange(resetItems);
	};

	return (
		<div className='relative inline-block'>
			<Button
				onClick={toggleDropdown}
				className='text-grey-dark-1 bg-none hover:bg-grey-light-2'
			>
				{title}
			</Button>
			{isOpen && (
				<div className='absolute z-10 mt-2 w-56 bg-white p-3 drop-shadow-2xl rounded -ml-[5rem] y'>
					<p className='font-bold mb-5 text-black'>Product Line</p>
					{items.map((item) => (
						<div key={item}>
							<Checkbox
								checked={checkedItems[item] || false}
								onChange={(e) =>
									handleCheckboxChange(item, e.target.checked)
								}
								label={item}
							/>
						</div>
					))}
					<Clickable
						className='text-red-light-1 focus:text-red-dark-1 active:text-red-dark-1 focus:outline-none'
						onClick={resetCheckedItems}
					>
						Reset
					</Clickable>
				</div>
			)}
		</div>
	);
};

export default CheckboxDropdown;
