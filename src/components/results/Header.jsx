'use client';
import UserSvg from '/public/user.svg';
import ChatBotSvg from '/public/chat-bot.svg';
import Logo from '/public/favicon.svg';

import Image from 'next/image';
import SearchBox from '../home/SearchBox';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = ({ query, category }) => {
	const router = useRouter();
	const [textInput, updateText] = useState(query);

	const SearchByText = (e) => {
		e.preventDefault();

		if (!textInput.length) return;

		const path = `/search/${category}?what=`;
		router.push(path + encodeURI(textInput));
	};

	const SearchWith = (categoryName) => {
		console.log(categoryName);
		router.replace(`/search/${categoryName}?what=${encodeURI(textInput)}`);
	};

	const Button = ({ onClick, title, active }) => {
		return (
			<button
				onClick={onClick}
				className={`rounded-full text-sm px-3 py-1 lg:px-8 lg:text-base lg:py-2 border ${
					active
						? 'hover:bg-blue-50 border-blue-500 text-blue-500'
						: 'hover:bg-slate-100'
				}`}
			>
				{title}
			</button>
		);
	};

	return (
		<div className='lg:px-8 py-4 lg:sticky top-0 border-b bg-white z-10'>
			<div className='flex lg:flex-row flex-col justify-between items-center space-x-6'>
				<div className='flex items-center w-11/12 lg:space-x-6 space-x-3'>
					<Image
						src={Logo}
						alt='Logo | Then What'
						width={50}
						height={0}
						priority
					/>
					<div className='relative w-full mt-0.5'>
						<form name='byTextInResult' onSubmit={SearchByText}>
							<input
								type='text'
								placeholder='Search What?'
								onChange={(e) => updateText(e.target.value)}
								value={textInput}
								className='pr-36 pl-6 py-3 tracking-wide first-letter:capitalize rounded-full outline-none focus::outline-none border-[0.1px] hover:shadow-[0px 0px 20px 0px] hover:shadow-slate-500 w-full'
							/>
						</form>
						<div className='absolute top-2.5 right-3 px-3 flex items-center space-x-6'>
							<button
								onClick={() => updateText('')}
								className='outline-none focus:outline-none'
							>
								{textInput !== '' && (
									<span className='bi bi-x-lg text-xl text-neutral-600'></span>
								)}
							</button>
							<button className='outline-none focus:outline-none mx-2'>
								<span className='bi bi-search text-xl text-neutral-600'></span>
							</button>
							<button className='outline-none focus:outline-none mx-2'>
								<span className='bi bi-mic-fill text-xl text-neutral-600'></span>
							</button>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-wrap justify-center lg:justify-start lg:my-0 my-2 lg:space-y-0 space-y-3 lg:items-center items-baseline space-x-3'>
					<Button
						title={'All Results'}
						active={category === 'all' ? true : false}
						onClick={() => SearchWith('all')}
					/>

					<Button
						title={'Images'}
						active={category === 'images' ? true : false}
						onClick={() => SearchWith('images')}
					/>
				</div>
				<div className='w-30 hidden lg:flex items-center space-x-5'>
					<button className=''>
						<Image
							src={UserSvg}
							alt='User | Profile'
							width={70}
							height={0}
							priority
						/>
					</button>
					<button>
						<Image
							src={ChatBotSvg}
							alt='User | Chatbot'
							width={80}
							height={0}
							priority
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
