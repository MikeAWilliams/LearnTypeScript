export function fizzbuzz(num: number) {
   var divisbileBy3 = (num % 3 == 0);
   var divisibleBy5 = (num % 5 == 0);
   if(divisibleBy5 && divisbileBy3) {
      return "FizzBuzz";
   }
   if (divisbileBy3){
      return "Fizz";
   }
   if (divisibleBy5){
      return "Buzz";
   }
   return num.toString();
}