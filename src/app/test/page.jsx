import React from 'react';
import { ChatGPTAPI } from 'chatgpt';

const page = () => {
	const api = new ChatGPTAPI({
		apiKey: process.env.OPENAI_API_KEY,
	});

	api.sendMessage('Hello World!').then((info) => console.log(info));

	return <div>page</div>;
};

export default page;
