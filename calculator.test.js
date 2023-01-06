import calculator from "./calculator.js";

test('2+ 0.1 equals 2.1', () => {
    expect(calculator.add(2, 0.1)).toBe(2.1);
});

test('0.2+ 0.1 equals 0.3', () => {
    expect(calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
})

test('2- 0.1 equals 1.9', () => {
    expect(calculator.subtract(2, 0.1)).toBe(1.9);
});

test('2 * 0.1 equals 0.2', () => {
    expect(calculator.multiply(2, 0.1)).toBe(0.2);
});

test('2/ 0.1 equals 20', () => {
    expect(calculator.divide(2, 0.1)).toBe(20);
});