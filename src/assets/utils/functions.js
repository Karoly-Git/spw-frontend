export function trimToWords(str, length) {
    const words = str.split(' ');
    if (words.length > length) {
        return words.slice(0, length).join(' ') + ' ...';
    }
    return str;
}
