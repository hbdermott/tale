
//create a react card component using chakra-ui Box and Flex components
//the top will be an image of the book cover
//below the image will be a Badge components displaying the genres of the book
//below the badge will be a Text component displaying the title of the book
//below the title will be the body of the card using a Text component for the description of the book
//below the description will be a Flex component containing the current like count and a button to increase the like count on the left side, and an Avatar component that links to the author's profile on the right side
//uses useAuth context hook to get the firebase database
//updates the 'book' database using book id with the new like count

const Card = ({ book }) => {
    const { db } = useAuth();
    const [like, setLike] = useState(book.like);

    const onLike = () => {
        setLike(true);
        db.collection('books').doc(book.id).update({
            like: like + 1
        });
    }