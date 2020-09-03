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
   return "Hello, " + names[0] + " and " + names[1] + ".";
}