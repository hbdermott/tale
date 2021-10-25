import { useRouter } from "next/router";

const User = () => {
	const router = useRouter();
	const { id } = router.query;
	return <>User with id: {id}</>;
};

export default User;
