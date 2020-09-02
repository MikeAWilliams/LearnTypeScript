import {primefactors} from "../src";

test('primefactors of 1 is empty', () => {
   expect(primefactors(1)).toEqual([]);
});
