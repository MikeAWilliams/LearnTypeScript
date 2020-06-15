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


// union types

function combine(input1: number | string, input2: number | string){
  if(typeof input1 ==='number' && typeof input2 === 'number') {
    return input1 + input2;
  }
  else {
    return input1.toString() + input2.toString();
  }
}
console.log(combine(1,2));
console.log(combine("one"," two"));

type PaymentMethod = 'cash' | 'paypal' | 'creditcard';

function GetMoney(method : PaymentMethod)
{
  switch(method){
    case 'cash':
        console.log('it was cash');
        break;
    case 'paypal':
        console.log('it was paypall');
        break;
    case 'creditcard':
        console.log('it was a credit card');
        break;
  }
}

GetMoney('cash');
GetMoney('paypal');
GetMoney('creditcard');

let binaryFunction: (a: number, b: number) => number
binaryFunction = add;

console.log(binaryFunction(3.14159, 7.0));

binaryFunction = (in1: number, in2: number) => {
  return in1 - in2;
};
console.log(binaryFunction(10, 7));

// generics and function argument
function Filter<T>(inarray: T[], filterFunction: (arg1: T) => boolean): T[] {
  let result: T[] = [];
  inarray.forEach((value) =>{
    if (filterFunction(value)) {
      result.push(value);
    }
  });
  return result;
}

let nums = Filter([0,1,2,3,4,5,6,7,8,9], (arg1: number) => {
  return arg1 <= 5;
});

console.log(nums);