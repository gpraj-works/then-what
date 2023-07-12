import React from 'react';

const SearchInfo = ({ info }) => {
	return (
		<div className='my-3'>
			<p className=' text-slate-600'>
				<span className='text-slate-700 text-sm mr-1'>
					{info?.formattedTotalResults}
				</span>
				results in
				<span className='text-slate-700 text-sm mx-1'>
					{info?.formattedSearchTime}
				</span>
				seconds
			</p>
		</div>
	);
};

export default SearchInfo;
