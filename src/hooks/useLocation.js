import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const useLocation = () => {
	//prettier-ignore
	const { data, error, isLoading } = useSWR('https://ipapi.co/json/?full=true', fetcher);

	return { data, error, isLoading };
};

export default useLocation;
