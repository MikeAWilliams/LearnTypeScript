function greetSingle(name: string):string {
   if(!name){
      return "Hello, my friend.";
   }
   if(name.toUpperCase() == name){
      return "HELLO "+ name+"!";
   }
   return "Hello, " + name + ".";
}

function isAllCaps(names: Array<string>):boolean {
   for(const name of names){
      if(name.toUpperCase() != name){
         return false;
      }
   }
   return true;
}

function greetMultiYell(names: Array<string>):string {
   if(2 == names.length) {
      return "HELLO " + names[0] + " AND " + names[1] + "!";
   }
   let result = "HELLO ";
   for(var index = 0; index < names.length - 1; index++) {
      result += names[index] + ", ";
   }
   result += "AND " + names[names.length - 1] + "!";
   return result;
}

function greetMulti(names: Array<string>):string {
   if(isAllCaps(names)){
      return greetMultiYell(names);
   }

   if(2 == names.length) {
      return "Hello, " + names[0] + " and " + names[1] + ".";
   }
   let result = "Hello, ";
   for(var index = 0; index < names.length - 1; index++) {
      result += names[index] + ", ";
   }
   result += "and " + names[names.length - 1] + ".";
   return result;
}

function splitCapsNames(names: Array<string>):Array<Array<string>> {
   let lower = Array<string>;
   let upper = Array<string>;
   for(const name of names){
      if(name.toUpperCase() == name){
         upper.push(name);
      }
      else {
         lower.push(name);
      }
   }
   return [lower, upper];
}

export function greet(names: Array<string>):string {
   if(!names || 0 == names.length) {
      return greetSingle(null);
   }
   if(1 == names.length) {
      return greetSingle(names[0]);
   }
   let lowerUpper = splitCapsNames(names);
   if(0 == lowerUpper[0].length){
      return greetMultiYell(lowerUpper[1]);
   }
   if(0 == lowerUpper[1].length){
      return greetMulti(lowerUpper[0]);
   }
   let result = ""
   if(1 == lowerUpper[0].length){
      result += greetSingle(lowerUpper[0][0]);
   }
   else {
      result += greetMulti(lowerUpper[0]);
   }
   result += " AND "
   if(1 == lowerUpper[1].length){
      result += greetSingle(lowerUpper[1][0]);
   }
   else {
      result += greetMultiYell(lowerUpper[1]);
   }

   return result;
}