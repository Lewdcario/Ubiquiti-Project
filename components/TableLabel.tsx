import React from 'react';

interface TableLabelProps {
	children: React.ReactNode;
	isHeader?: boolean;
}

const TableLabel: React.FC<TableLabelProps> = ({
	children,
	isHeader = false
}) => {
	const className =
		'border-b-1 border-grey-light-2 hover:bg-grey-light-2 focus:border-t-1 focus:border-b-1 focus:border-blue-dark-1';

	return isHeader ? (
		<th className={className}>{children}</th>
	) : (
		<td className={className}>{children}</td>
	);
};

export default TableLabel;
