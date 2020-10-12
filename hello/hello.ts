import { promises as fs } from 'fs';
//const fs = require('fs').promises;

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    constructor(public firstName: string, public lastName: string) {}
    
    speak = (): void => { 
        console.log("I am " + this.firstName + ' ' + this.lastName) 
    };

    register(): void {
        console.log("register for classes");
    }
}

function greet(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

function add(...args: number[]): number {
    return args.reduce((a,b) => a + b);
}

async function doFileStuff(): Promise<string> {
    console.log("reading file hello.ts asynchronously");
    const data: Buffer = await fs.readFile('hello.ts');
    console.log("hello.ts:");
    const s: string = data.toString();
    console.log(s);
    return s;
}

function doAddStuff() {
    const x: number[] = Array.from({length:10}, (_, k) => k + 1);
    console.log(add(1,2));
    console.log(add(1,2,3));
    console.log(add(...x));
}

function doUserStuff() {
    const jane = { 
        firstName: "Jane", 
        lastName: "User", 
        birthDate: new Date(1)
    };
    const joe = { 
        get firstName() { return "Joe"; },
        get lastName() { return "Shmo"; }
    };
    const mickey = new Student("Mickey", "Mouse");
    const users: Person[] = [jane, joe, mickey];

    console.log(jane.birthDate);
    mickey.register();
    mickey.speak();
    for (const u of users)
        console.log(greet(u));
}

doFileStuff();
doAddStuff();
doUserStuff();

/*
exports.Student = Student;
exports.greet = greet;
exports.add = add;
exports.doAddStuff = doAddStuff;
exports.doFileStuff = doFileStuff;
exports.doUserStuff = doUserStuff;
*/
