
const Leaf = (props) => {
	return (
		<span
			{...props.attributes}
			style={styles(props.leaf)}
		>
			{props.children}
		</span>
	);
};

const styles = (mods) => {
    return {
			fontWeight: mods.bold ? "bold" : "normal",
            fontStyle: mods.italic ? "italic" : "normal",
            color: mods.color ? mods.color : "inherit",
            textDecoration: mods.decoration ? mods.decoration : "none"
	}
}

export default Leaf;