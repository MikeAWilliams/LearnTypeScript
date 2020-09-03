function greetSingle(name: string):string {
   if(!name){
      return "Hello, my friend.";
   }
   if(name.toUpperCase() == name){
      return "HELLO "+ name+"!";
   }
   return "Hello, " + name + ".";
}

export function greet(names: Array<string>):string {
   if(1 == names.length) {
      return greetSingle(names[0]);
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