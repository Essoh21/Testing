const analyseArray = (aArray) => {
    const length = aArray.length;
    const sum = aArray.reduce((prev, curr) => {
        return (prev + curr);
    }, 0);
    const average = sum / length;
    const min = Math.min(...aArray);
    const max = Math.max(...aArray);
    return { average, min, max, length }
}

export default analyseArray;