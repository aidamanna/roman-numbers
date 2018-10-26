const convert = require('./convert');

test('converts 1 to roman numbers', () => {
  expect(convert(1)).toBe('I');
});

test('converts 5 to roman numbers', () => {
  expect(convert(5)).toBe('V');
});

test('converts 10 to roman numbers', () => {
  expect(convert(10)).toBe('X');
});

test('converts 50 to roman numbers', () => {
  expect(convert(50)).toBe('L');
});

test('converts 2 to roman numbers', () => {
  expect(convert(2)).toBe('II');
});

test('converts 3 to roman numbers', () => {
  expect(convert(3)).toBe('III');
});

test('converts 4 to roman numbers', () => {
  expect(convert(4)).toBe('IV');
});

test('converts 6 to roman numbers', () => {
  expect(convert(6)).toBe('VI');
});

test('converts 12 to roman numbers', () => {
  expect(convert(12)).toBe('XII');
});