import analyseArray from "./analyseArray.js";

test('analyseArray([1,2,3] is {average: 2, min: 1, max: 3, length: 3} ', () => {
    expect(analyseArray([1, 2, 3]))
        .toEqual({ average: 2, min: 1, max: 3, length: 3 })
});

test('analyseArray([1,8,3,4,2,6]) is {average: 4, min: 1, max: 8, length: 6}', () => {
    expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})