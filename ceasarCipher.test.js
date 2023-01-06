import ceasarCipher from "./ceasarCipher.js";

test('ceasarCipher(name) is obnf', () => {
    expect(ceasarCipher('name')).toEqual('obnf');
})