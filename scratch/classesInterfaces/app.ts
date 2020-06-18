class Department {
    private employees: string[] = [];

    constructor(public name: string) {
    }

    print(this: Department){
        console.log(`${this.name} department`);
        console.log(`Has ${this.employees.length} employees`);
        console.log(this.employees)
    }

    addEmployee(this: Department, employee: string){
        this.employees.push(employee);
    }
}

let md = new Department ("Math");
md.addEmployee('stan');
md.addEmployee('jason');
md.print();

abstract class Logger {
    abstract log(toLog: string): void;
}

class ConsoleLogger extends Logger {
    log(toLog: string) {
        console.log(toLog);
    }
}

let myLogger = new ConsoleLogger();
myLogger.log("Stuff to log");

interface Person {
    name: string;
    age: number;

    print():void;
}

let user1: Person;
user1 = {
    name:'Max',
    age:74,
    print() {
        console.log(`Name ${this.name} age ${this.age}`);
    }
}
user1.print();

interface ILogger {
    log(toLog: string): void;
}

function DoWork(logArg: ILogger) {
    logArg.log("about to get thing1");
    const thing1 = 4;
    logArg.log("about to get thing2");
    const thing2 = 7;
    const result = thing1 + thing2;
    logArg.log(`thing1 + thing2 = ${result}`)
}

class MyLogger implements ILogger {
    log(toLog:string) {
        console.log(toLog)
    }
}

let myNewLogger = new MyLogger();
DoWork(myNewLogger);

interface LoggerFunction {
    (toLog:string): void;
}

const myLoggerFunction: LoggerFunction = (toLog: string) => {
    console.log(toLog);
}

myLoggerFunction("Logging from my logger function");

class Nothing {
    exists : false = false;
}

class Exists {
    exists : true = true;
}

class Car extends Exists {
    constructor(public name: string, public color: string){
        super();
    }
}

type MaybeCar = Car | Nothing;

function GetCar(isError: boolean): MaybeCar {
    if (isError) {
        return new Nothing;
    }
    return new Car('Herby', 'Yellow');
}

function PrintCar(car: MaybeCar) {
    if(car.exists) {
        console.log(`${car.name} is ${car.color}`);
    }
    else {
        console.log('There is no car');
    }
}

const notACar = GetCar(true);
const aCar = GetCar(false);

PrintCar(notACar);
PrintCar(aCar);

