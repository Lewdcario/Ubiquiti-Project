import React from 'react';

interface Props {
	suggestions: Suggestion[];
	handleSuggestionClick: (suggestion: Suggestion) => void;
	searchTerm: string;
	renderSuggestion: (suggestion: Suggestion, query: string) => JSX.Element;
}

const Dropdown: React.FC<Props> = ({
	suggestions,
	handleSuggestionClick,
	searchTerm,
	renderSuggestion
}) => {
	return (
		<div className='absolute z-50 mt-2 w-full rounded-md bg-white drop-shadow-2xl'>
			<div className='py-1'>
				{suggestions.map((suggestion, index) => (
					<div className='w-full' key={index}>
						<button
							className='px-4 py-2 text-sm text-grey-dark-2 hover:bg-grey-light-4 transition-all cursor-pointer z-50 w-full'
							onClick={() => handleSuggestionClick(suggestion)}
						>
							{renderSuggestion(suggestion, searchTerm)}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
