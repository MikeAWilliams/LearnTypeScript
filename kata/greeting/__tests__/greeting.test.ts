import {greet} from "../src";

test('hello name', () => {
   expect(greet("Bob")).toEqual("Hello, Bob.");
   expect(greet("Susan")).toEqual("Hello, Susan.");
});
