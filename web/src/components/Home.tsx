import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export interface Props {
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ setIsLogin }: Props) {
	return (
		<div className='relative'>
			<Header setIsLogin={setIsLogin} />

			<Outlet />
		</div>
	);
}
