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

interface Validateconfig {
    [property: string]:{
        [validatableProp: string]: string[];
    }
}

const registeredValidators: Validateconfig = {};

function Required(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        [propertyName]: ['required']
    }
}

function PostitiveNumber(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        [propertyName]: ['positive']
    }
}

function validate(obj: any) {
    const objectValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objectValidatorConfig) {
        return true;
    }
    for(const prop in objectValidatorConfig) {
        for(const validator of objectValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    return !!obj[prop];
                case 'positive':
                    return obj[prop] > 0;
            }
        }
        return true;
    }

}

class Course {
    @Required
    title: string;
    @PostitiveNumber
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
    if(!validate(createdCourse)) {
        alert('INVALID INPUT PLEASE TRY AGAIN!');
        return;
    }
    console.log(createdCourse);
})