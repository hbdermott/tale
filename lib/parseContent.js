
export const parseContent = (content) => {
    let res = JSON.stringify(content);
    const remove = [
			/"[ ]*color\s*"\s*:\s*"\s*rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)[^,}]*[,]*/g,
			/"font[^ "]*"[^,}]*[,]?/g,
			/"color"[ ]*:[ ]*"[ ]*black[^,}]*[,]?/g,
	];
    remove.forEach(regex => res = res.replace(regex, ''))
    res = res.replace(/,\s*}/g, "}");
    return res;
}