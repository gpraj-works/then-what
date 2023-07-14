'use client';
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const Pagination = ({category}) => {
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const startIndex = +searchParams.get('start') || 1;

	const prevLink = `${pathName}?what=${searchParams.get('what')}&start=${
		startIndex - 10
	}`;

	const nextLink = `${pathName}?what=${searchParams.get('what')}&start=${
		startIndex + 10
	}`;

	return (
		<div className={`flex ${category === 'all' ? 'justify-between' : startIndex <= 10 ? 'justify-end':'justify-between'}`}>
			{startIndex >= 10 && (
				<Link
					href={prevLink}
					className='bg-blue-500 text-white px-3 py-1 rounded-md'
				>
					<span className='bi bi-chevron-left'></span> Previous page
				</Link>
			)}
			{startIndex <= 90 && (
				<Link
					href={nextLink}
					className='bg-blue-500 text-white px-3 py-1 rounded-md'
				>
					Next page <span className='bi bi-chevron-right'></span>
				</Link>
			)}
		</div>
	);
};

export default Pagination;
