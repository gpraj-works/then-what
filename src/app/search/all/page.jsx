'use client';
import Footer from '@/components/results/Footer';
import Header from '@/components/results/Header';
import Pagination from '@/components/results/Pagination';
import SearchInfo from '@/components/results/SearchInfo';
import useSearch from '@/hooks/useSearch';
import parse from 'html-react-parser';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const page = () => {
	const params = useSearchParams();
	const query = params.get('what');
	const startIndex = params.get('start') || '1';
	const { data, error, isLoading } = useSearch(query, startIndex);
	const results = data?.items;
	const searchInfo = data?.searchInformation;
	console.log(data)
	return (
		<>
			<title>{query}</title>
			<Header query={query} category={'all'} />
			<div className='w-8/12'>
				{!isLoading && !results && (
					<div>
						<h1>No results found</h1>
					</div>
				)}

				{results && (
					<div className='px-40'>
						<SearchInfo info={searchInfo} />
						{results.map((result, index) => (
							<div key={ index } className='py-4'>
								<div className='group inline-flex flex-col'>
									<Link href={result.link} className='text-sm'>
										{result.formattedUrl}
									</Link>
									<Link
										href={result.link}
										className='truncate group-hover:underline text-blue-600 decoration-blue-700 text-lg'
									>
										{result.title}
									</Link>
								</div>
								<p className='mt-1 text-neutral-600'>
									{parse(result.htmlSnippet)}
								</p>
							</div>
						))}
					</div>
				)}
				<div className='px-40 pt-6 mb-10'>{!isLoading && <Pagination category={'all'}/>}</div>
			</div>
			{!isLoading && <Footer />}
		</>
	);
};

export default page;
