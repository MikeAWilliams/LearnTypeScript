import {greet} from "../src";

test('hello name', () => {
   expect(greet(["Bob"])).toEqual("Hello, Bob.");
   expect(greet(["Susan"])).toEqual("Hello, Susan.");
});

test('hello my friend', () => {
   expect(greet([""])).toEqual("Hello, my friend.");
   expect(greet([null])).toEqual("Hello, my friend.");
});

test('shouting', () => {
   expect(greet(["BOB"])).toEqual("HELLO BOB!");
   expect(greet(["SUSAN"])).toEqual("HELLO SUSAN!");
});

test('two names', () => {
   expect(greet(["Bob", "Susan"])).toEqual("Hello, Bob and Susan.");
});