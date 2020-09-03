import {greet} from "../src";

test('hello bob', () => {
   expect(greet("Bob")).toEqual("Hello, Bob.");
});
