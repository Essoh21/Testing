const reverseString = (aString) => {
    return aString.split('').reverse().reduce((prev, res) => {
        return prev + res;
    }, '')
}

export default reverseString;
