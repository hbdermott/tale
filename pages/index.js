import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import Logout from '../components/Logout';
import { useAuth } from '../context/User';
import styles from '../styles/Home.module.css'

const Home = () => {
  const {user, loading, ...rest} = useAuth()
  const router = useRouter();

	useEffect(() => {
		if (!loading && !user) router.push("/login");
	}, [user, loading]);
  return (
      <div className={styles.container}>
        <div>Hello {user?.name}</div>
        <Logout></Logout>
      </div>
    )
}

export default Home;
