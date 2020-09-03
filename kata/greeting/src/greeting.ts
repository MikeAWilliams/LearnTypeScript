export function greet(name: string) {
   if(!name){
      return "Hello, my friend.";
   }
   if(name.toUpperCase() == name){
      return "HELLO "+ name+"!";
   }
   return "Hello, " + name + ".";
}