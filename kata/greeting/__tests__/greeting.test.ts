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
   expect(greet(["Jill", "Jane"])).toEqual("Hello, Jill and Jane.");
   expect(greet(["Bob", "Susan"])).toEqual("Hello, Bob and Susan.");
});

test('more than two names', () => {
   expect(greet(["Jill", "Jane", "Susan"])).toEqual("Hello, Jill, Jane, and Susan.");
   expect(greet(["Jill", "Jane", "Susan", "Bob"])).toEqual("Hello, Jill, Jane, Susan, and Bob.");
});

test('empty or null list', () => {
   expect(greet([])).toEqual("Hello, my friend.");
   expect(greet(null)).toEqual("Hello, my friend.");
});

test('all caps in list', () => {
   expect(greet(["BRIAN", "MAX"])).toEqual("HELLO BRIAN AND MAX!");
   expect(greet(["AMY", "BRIAN", "MAX"])).toEqual("HELLO AMY, BRIAN, AND MAX!");
});

test('all caps in list', () => {
   expect(greet(["Amy", "BRIAN", "Bob", "MAX"])).toEqual("Hello, Amy and Bob. AND HELLO BRIAN AND MAX!");
   expect(greet(["AMY", "BRIAN", "Bob", "MAX"])).toEqual("Hello, Bob. AND HELLO AMY, BRIAN, AND MAX!");
});