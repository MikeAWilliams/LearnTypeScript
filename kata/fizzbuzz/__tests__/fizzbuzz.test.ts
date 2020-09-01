import {fizzbuzz} from "../src";

test('divisible by 3 returns Fizz', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(6)).toBe("Fizz");
  expect(fizzbuzz(9)).toBe("Fizz");
  expect(fizzbuzz(12)).toBe("Fizz");
});

test('not divisible by 3, 5, or 15 returns the number', () => {
  expect(fizzbuzz(1)).toBe("1");
});