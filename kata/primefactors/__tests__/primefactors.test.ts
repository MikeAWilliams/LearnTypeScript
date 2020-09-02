import {primefactors} from "../src";

test('primefactors of 1 is empty', () => {
   expect(primefactors(1)).toEqual([]);
});

test('primefactors of 2 is 2', () => {
   expect(primefactors(2)).toEqual([2]);
});
