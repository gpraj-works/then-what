'use client';
import useLocation from '@/hooks/useLocation';

const Footer = () => {
	const { data: location } = useLocation();
	const country = location?.country_name || 'Locating...';

	return (
		<div className='bg-slate-100 text-slate-500 text-sm fixed bottom-0 w-full'>
			<div className='pt-3 px-3'>
				<em className='bi bi-geo-alt mr-1'></em>
				{country}
			</div>
			<div className='flex justify-between items-center mt-3 border-t p-3'>
				<ul className='inline-flex space-x-3'>
					<li>About</li>
					<li>How it works?</li>
				</ul>
				<ul className='inline-flex space-x-3'>
					<li>Privacy</li>
					<li>Terms</li>
					<li>Settings</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
