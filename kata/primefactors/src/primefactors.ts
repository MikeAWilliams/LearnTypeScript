export function primefactors(num: number) {
   let result: number[] = [];
   for(var divisor = 2; num > 1; divisor++){
      while(num % divisor == 0){
         result.push(divisor);
         num /= divisor;
      }
   }
   return result;
}