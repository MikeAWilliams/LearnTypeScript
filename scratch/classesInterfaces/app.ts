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