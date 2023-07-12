import React from 'react';
import UserSvg from '/public/user.svg';
import AppMenuSvg from '/public/app-menu.svg';
import ChatBotSvg from '/public/chat-bot.svg';

import Image from 'next/image';

const Header = () => {
	return (
		<div className='py-4 px-5 sticky top-0'>
			<div className='flex justify-between items-center'>
				<div className='inline-flex items-center space-x-5'>
					<button className=''>
						<Image
							src={UserSvg}
							alt='User | Profile'
							width={30}
							height={30}
							priority
						/>
					</button>
				</div>
				<div>
					<button>
						<Image
							src={ChatBotSvg}
							alt='User | Chatbot'
							width={33}
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
