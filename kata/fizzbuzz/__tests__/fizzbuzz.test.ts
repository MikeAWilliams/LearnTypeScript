import {fizzbuzz} from "../src";

test('divisible by 3 returns Fizz', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
});