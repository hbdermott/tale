import { useRouter } from "next/router";

const Book = () => {
    const router = useRouter();
    const {id} = router.query
    return (
        <>
            Book with id: {id}
        </>
    )
}

export default Book;