import {fizzbuzz} from "../src";

test('divisible by 3 returns Fizz', () => {
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(6)).toBe("Fizz");
  expect(fizzbuzz(9)).toBe("Fizz");
  expect(fizzbuzz(12)).toBe("Fizz");
});

test('divisible by 5 returns Buzz', () => {
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(10)).toBe("Buzz");
  expect(fizzbuzz(20)).toBe("Buzz");
  expect(fizzbuzz(25)).toBe("Buzz");
});

test('divisible by 15 returns Buzz', () => {
  expect(fizzbuzz(15)).toBe("FizzBuzz");
  expect(fizzbuzz(30)).toBe("FizzBuzz");
  expect(fizzbuzz(45)).toBe("FizzBuzz");
  expect(fizzbuzz(60)).toBe("FizzBuzz");
});

test('not divisible by 3, 5, or 15 returns the number', () => {
  expect(fizzbuzz(1)).toBe("1");
  expect(fizzbuzz(2)).toBe("2");
  expect(fizzbuzz(4)).toBe("4");
  expect(fizzbuzz(7)).toBe("7");
  expect(fizzbuzz(16)).toBe("16");
  expect(fizzbuzz(122)).toBe("122");
});