
abstract class Employee {

    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    work(): void {
        this.tasks.map(x => console.log(this.name + x));
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }

    public getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {

    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a simple task');
    }
}

class Senior extends Employee {

    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task');
        this.tasks.push(' is taking time off work');
        this.tasks.push(' is supervising junior workers');
    }
}

export class Manager extends Employee {

    public divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.divident=370;
        this.tasks.push(' scheduled a meeting');
        this.tasks.push(' is preparing a quarterly meeting');
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

let ivan= new Junior('Ivan', 27);
ivan.work();
ivan.collectSalary();

