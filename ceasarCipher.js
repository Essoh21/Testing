const ceasarCipher = (aText, shift = 1) => {
    let encryptedTex = '';
    for (let item of aText) {
        if (!charsCodes.has(item)) {
            encryptedTex += item;
            continue;
        }
        const itemCode = getCharCodeOf(item);
        const encryptedCode = getEncryptionCodeOf(itemCode, shift);
        const encryptedCodeChar = getCodeCharOf(encryptedCode);
        encryptedTex += encryptedCodeChar;

    }
    return encryptedTex;
}

const letters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const numbers = [...Array(26)].map((_, i) => i);
const charsCodes = (() => {
    const container = new Map();
    letters.forEach((letter, index) => {
        container.set(letter, index)
    });
    return container;
})();

const codesChars = (() => {
    const container = new Map();
    numbers.forEach((number, index) => {
        container.set(number, letters[index])
    });
    return container;
})();

const getCharCodeOf = (char) => { return charsCodes.get(char); }
const getCodeCharOf = (code) => { return codesChars.get(code); }
const getEncryptionCodeOf = (code, shift) => {
    return (code + shift) % 26;
};


export default ceasarCipher;