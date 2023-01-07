import ceasarCipher from "./ceasarCipher.js";

test('ceasarCipher(name) is obnf', () => {
    expect(ceasarCipher('name')).toEqual('obnf');
})

test('ceasarCipher("my name is!") is "nz mbnf jt! "', () => {
    expect(ceasarCipher("my name is!")).toEqual('nz obnf jt!');
})

test('ceasarCipher("zila") is "ajmb"', () => {
    expect(ceasarCipher("zila")).toEqual("ajmb");
})

test('ceasarCipher("my", shift =2) is "oa"', () => {
    expect(ceasarCipher("my", 2)).toEqual("oa");
})
