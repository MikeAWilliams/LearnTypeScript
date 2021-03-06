import {primefactors} from "../src";

test('primefactors of 1 is empty', () => {
   expect(primefactors(1)).toEqual([]);
});

test('primefactors of 2 is 2', () => {
   expect(primefactors(2)).toEqual([2]);
});

test('primefactors of 3 is 3', () => {
   expect(primefactors(3)).toEqual([3]);
});

test('primefactors of 4 is 2,2', () => {
   expect(primefactors(4)).toEqual([2,2]);
});

test('primefactors of 6 is 2,3', () => {
   expect(primefactors(6)).toEqual([2,3]);
});

test('primefactors of 8 is 2,2,2', () => {
   expect(primefactors(8)).toEqual([2,2,2]);
});

test('primefactors of 9 is 3,3', () => {
   expect(primefactors(9)).toEqual([3,3]);
});

test('primefactors of arbitrary numbers', () => {
   expect(primefactors(125)).toEqual([5,5,5]);
   expect(primefactors(12754)).toEqual([2,7,911]);
   expect(primefactors(24225)).toEqual([3,5,5,17,19]);
});