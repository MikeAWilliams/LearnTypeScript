const names = ['Max', 'Manuel'];
const names2: Array<string> = [];
names2.push("Billy");
console.log(names)
console.log(names2)

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    console.log(data);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, {age: 30});
console.log(mergedObj.name);
console.log(mergedObj.age);

class Nothing {
    hasValue: false = false;
}

class Just<T>{
    hasValue: true = true;
    constructor(public value: T){

    }
}

type Maybe<T> = Just<T> | Nothing;

class Car {
    constructor(public name: string, public color: string){
    }

    print() {
        console.log(`Car ${this.name} is ${this.color}`);
    }
}

function GetCar(isCar: boolean) : Maybe<Car> {
    if(isCar){
        return new Just<Car>(new Car('Herby', 'Yellow'));
    }
    return new Nothing
}

function Print(car: Maybe<Car>) {
    if(car.hasValue){
        car.value.print();
    }
    else
    {
        console.log('There is no car');
    }
}

Print(GetCar(false));
Print(GetCar(true));