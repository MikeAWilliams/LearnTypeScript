function Logger(logMessage: string) {
  return function Logger(constructor: Function) {
    console.log(logMessage);
    console.log(constructor);
  };
}

@Logger('Parsing the person')
class Person {
 name = 'Max'   ;

 constructor() {
     console.log("Creating person object");
 }
}

const person = new Person();

console.log(person);

class Course {
    title: string;
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event =>{
    event.preventDefault();

    const titleElem = document.getElementById('title') as HTMLInputElement;
    const priceElem = document.getElementById('price') as HTMLInputElement;

    const title = titleElem.value;
    const price = +priceElem.value;

    const createdCourse = new Course(title, price);
    console.log(createdCourse);
})