import reverseString from "./reverseString"

test('my name reversed is eman ym', () => {
    expect(reverseString('my name')).toEqual('eman ym');
})