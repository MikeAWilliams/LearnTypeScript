export function primefactors(num: number) {
   let result: number[] = [];
   if(num % 2 == 0){
      result.push(2);
      num /= 2;
   }
   if(num > 1) {
      result.push(num);
   }
   return result;
}