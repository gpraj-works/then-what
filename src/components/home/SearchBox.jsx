'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
	const router = useRouter();

	const [textInput, updateText] = useState('');

	const SearchByText = (e) => {
		e.preventDefault();

		if (!textInput.length) return;

		const path = `/search/all?what=`;
		router.push(path + encodeURI(textInput));
	};

	return (
		<div className='flex justify-center items-center my-32'>
			<div className='flex flex-col items-center space-y-10 w-full'>
				<div className='flex justify-center items-center w-96'>
					<img src='/logo.svg' alt='What | Logo' className='w-auto' />
				</div>
				<div className='w-3/6'>
					<div className='relative'>
						<form id='byText' onSubmit={SearchByText}>
							<input
								type='text'
								onChange={(e) => updateText(e.target.value)}
								placeholder='Search What?'
								className='px-14 py-3 tracking-wide first-letter:capitalize rounded-full outline-none focus::outline-none border-[0.1px] hover:shadow-[0px 0px 20px 0px] hover:shadow-slate-500 w-full'
							/>
						</form>
						<span className='bi bi-search absolute left-6 top-3 text-neutral-600'></span>
						<span className='bi bi-mic-fill text-xl absolute right-6 top-2.5 cursor-pointer text-neutral-600'></span>
					</div>
				</div>
				<div className='inline-flex space-x-4'>
					<button
						form='byText'
						type='submit'
						className='rounded-full px-8 py-2 bg-slate-100 hover:bg-slate-200'
					>
						Search
					</button>
					<button className='rounded-full px-8 py-2 bg-slate-100 hover:bg-slate-200'>
						Trending today
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
