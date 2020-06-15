function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 3.14159;
const result = add(number1, number2);
console.log(result);

enum Role { admin, author, reader};

const person = {
  name: "Mike",
  age: 37,
  role: Role.reader
};

console.log(person);

console.log(person.role === Role.author)
