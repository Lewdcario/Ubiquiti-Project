import React, { useState, InputHTMLAttributes } from 'react';
import { FaThLarge, FaList } from 'react-icons/fa';
import Image from 'next/image';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setViewMode: React.Dispatch<React.SetStateAction<'grid' | 'table'>>;
}

const Search: React.FC<SearchInputProps> = ({ searchTerm, setSearchTerm, setViewMode, ...rest }) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className='flex justify-between items-center mb-4'>
			<div className='relative'>
				<input 
					type='text' 
					placeholder={isFocused ? '' : 'Search'} 
					value={searchTerm} 
					onChange={(e) => setSearchTerm(e.target.value)} 
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					className='pl-10 py-2 bg-grey-light-2 placeholder-grey-dark-1 text-dark font-core-sans rounded outline-blue-dark-2 active:outline-blue-dark-2 focus:outline-blue-dark-2 hover:outline-blue-dark-2'
					{...rest}
				/>
				<div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
					<Image src='/search.svg' height={24} width={24} className='rounded' alt='Search' />
				</div>
			</div>
			<div className='flex items-center'>
				<FaThLarge onClick={() => setViewMode('grid')} />
				<FaList onClick={() => setViewMode('table')} />
			</div>
		</div>
	);
};

export default Search;
