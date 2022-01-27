import { Box} from "@chakra-ui/layout";
import EditorContainer from "./components/EditorContainer";
import Tiptap from "./TipTap";


const Editor = ({book}) => {
    return (
				<Tiptap book={book}/>
		);
}

export default Editor
