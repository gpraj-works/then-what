import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const searchKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY;
const engineKey = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE_KEY;

const useSearch = (query, index) => {
	const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${searchKey}&cx=${engineKey}&q=${query}&start=${index}`;
	const { data, error, isLoading } = useSWR(baseUrl, fetcher, {
		revalidateOnFocus: false,
		// revalidateOnMount: false,
		// revalidateIfStale: false,
	});
	return { data, error, isLoading };
};

export default useSearch;
