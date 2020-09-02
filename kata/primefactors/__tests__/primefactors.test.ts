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