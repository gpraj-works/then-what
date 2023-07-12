'use client';
import Header from '@/components/results/Header';
import Pagination from '@/components/results/Pagination';
import SearchInfo from '@/components/results/SearchInfo';
import useSearch from '@/hooks/useSearch';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/results/Footer';

const page = () => {
	const params = useSearchParams();
	const query = params.get('what') + `&searchType=image`;
	const startIndex = params.get('start') || '1';
	const { data, error, isLoading } = useSearch(query, startIndex);
	const results = data?.items;
	const searchInfo = data?.searchInformation;

	console.log(results && results[1]);

	return (
		<>
			<title>{params.get('what') + ' | Images'}</title>
			<Header query={params.get('what')} category={'images'} />
			<div className='w-full'>
				{!isLoading && !results && (
					<div>
						<h1>No results found</h1>
					</div>
				)}

				{results && (
					<>
						<div className='px-40 mt-4 mb-6 text-center'>
							<SearchInfo info={searchInfo} />
						</div>
						<div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 px-2'>
							{results.map((result, index) => (
								<div
									className='hover:shadow-xl delay-100 duration-300 border p-3 rounded-lg w-72 h-72 flex flex-col justify-between'
									key={index}
								>
									<Link href={result.image.contextLink}>
										<div className='flex justify-center items-center'>
											<img
												src={result.link}
												alt={result.title}
												className='object-contain h-48 w-96'
											/>
										</div>
									</Link>
									<div className='relative'>
										<Link
											href={result.image.contextLink}
											className='text-sm text-slate-500'
										>
											{result.displayLink}
										</Link>
										<Link href={result.image.contextLink} className=''>
											<h2
												className={`truncate w-[${result.image.thumbnailWidth}px]`}
											>
												{result.title}
											</h2>
										</Link>
									</div>
								</div>
							))}
						</div>
					</>
				)}

				<div className='px-10 pt-8 pb-10'>{!isLoading && <Pagination />}</div>
			</div>
			{!isLoading && <Footer />}
		</>
	);
};

export default page;
