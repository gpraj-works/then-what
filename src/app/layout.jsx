import '@/styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: '400',
	subsets: ['cyrillic'],
});

export const metadata = {
	title: 'Then what ?',
	description: 'Basic search engine for best experience!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<head>
				<link rel='shortcut icon' href='/favicon.svg' type='image/x-icon' />
			</head>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
