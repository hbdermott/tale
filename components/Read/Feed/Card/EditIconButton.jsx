import { IconButton } from "@chakra-ui/react";
import { Edit } from "@styled-icons/fluentui-system-filled";
import Link from "next/link";
import { useState } from "react";

const EditIconButton = ({ id, ...rest }) => {
    const [isLoading, setLoading] = useState(false);
	return (
		<Link passHref href={`/write/${id}`}>
			<IconButton
                isLoading={isLoading}
				variant="overlay"
				icon={<Edit size="24px" />}
				onClick={(e) => {
                    e.stopPropagation()
                    setLoading(true);
                }}
                {...rest}
			/>
		</Link>
	);
};

export default EditIconButton;