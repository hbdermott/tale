import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import Logout from '../components/Logout';
import { useAuth } from '../context/User';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import pic from '../public/grass_pixel.jpg'
import { getURL } from 'next/dist/shared/lib/utils';
const Home = () => {
  const {user, loading, ...rest} = useAuth()
  const router = useRouter();

	useEffect(() => {
		if (!loading && !user) router.push("/login");
	}, [user, loading, router]);
  return (
    <>
		<div className="bg-image">
		</div>
    <div className="top">
				<div>Hello {user?.name}</div>
				<Logout></Logout>
		</div>
    </>
	);
}

export default Home;
