import React, { useState, useEffect, useRef, InputHTMLAttributes } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

interface Suggestion {
	deviceName: string;
	productName: string;
}

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	suggestions: Suggestion[];
}

const Search: React.FC<SearchProps> = ({
	searchTerm,
	setSearchTerm,
	suggestions,
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [filteredSuggestions, setFilteredSuggestions] = useState<
		Suggestion[]
	>([]);
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: globalThis.MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setIsFocused(false);
			}
		};

		document.addEventListener(
			'mousedown',
			handleClickOutside as unknown as EventListener
		);
		return () => {
			document.removeEventListener(
				'mousedown',
				handleClickOutside as unknown as EventListener
			);
		};
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		const searchQuery = e.target.value.toLowerCase();
		const filtered = suggestions.filter(
			(suggestion) =>
				suggestion.deviceName.toLowerCase().includes(searchQuery) ||
				suggestion.productName.toLowerCase().includes(searchQuery)
		);
		setFilteredSuggestions(filtered);
	};

	const handleSuggestionClick = (suggestion: Suggestion) => {
		setSearchTerm(`${suggestion.deviceName} ${suggestion.productName}`);
		setIsFocused(false);
		setFilteredSuggestions([]);
	};

	const renderSuggestion = (suggestion: Suggestion, query: string) => {
		const matchIndex = suggestion.productName
			.toLowerCase()
			.indexOf(query.toLowerCase());
		const prefix = suggestion.productName.slice(0, matchIndex);
		const match = suggestion.productName.slice(
			matchIndex,
			matchIndex + query.length
		);
		const suffix = suggestion.productName.slice(matchIndex + query.length);

		return (
			<div className='inline-flex justify-between w-full'>
				<span className='text-left'>
					{prefix}
					<span className='font-semibold underline'>{match}</span>
					{suffix}
				</span>
				<span className='text-right text-grey-light-3'>
					{suggestion.deviceName}
				</span>
			</div>
		);
	};

	return (
		<div className='flex justify-between items-center' ref={wrapperRef}>
			<div className='relative w-[20rem]'>
				<input
					type='text'
					placeholder={isFocused ? '' : 'Search'}
					value={searchTerm}
					onChange={handleInputChange}
					onFocus={() => setIsFocused(true)}
					className='w-[20rem] pl-10 py-2 bg-grey-light-2 placeholder-grey-dark-1 text-dark font-core-sans rounded outline-blue-dark-2 active:outline-blue-dark-2 focus:outline-blue-dark-2 hover:outline-blue-dark-2'
					{...rest}
				/>
				<div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
					<Image
						src='search.svg'
						height={24}
						width={24}
						className='rounded'
						alt='Search'
					/>
				</div>
				{searchTerm && (
					<div className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'>
						<FaTimes onClick={() => setSearchTerm('')} />
					</div>
				)}
				{isFocused && filteredSuggestions.length ? (
					<div className='absolute z-50 mt-2 w-full rounded-md bg-white shadow-lg'>
						<div className='py-1'>
							{filteredSuggestions.map((suggestion, index) => (
								<div className='w-full' key={index}>
									<button
										className='px-4 py-2 text-sm text-grey-dark-2 hover:bg-grey-light-4 transition-all cursor-pointer z-50 w-full'
										onClick={() =>
											handleSuggestionClick(suggestion)
										}
									>
										{renderSuggestion(
											suggestion,
											searchTerm
										)}
									</button>
								</div>
							))}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Search;
