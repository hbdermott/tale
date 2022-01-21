export const getUTCTime = () => {
    const date = new Date();
    const utc = date.getTime();
    return utc;
}

export const getLocalTimeString = (utc) => {
    const date = new Date(utc);
    const local = date.toLocaleString();
    return local;
}