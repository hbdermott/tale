import { useRouter } from "next/router";

const Chapter = () => {
	const router = useRouter();
	const { id } = router.query;
	return <>Chapter with id: {id}</>;
};

export default Chapter;
