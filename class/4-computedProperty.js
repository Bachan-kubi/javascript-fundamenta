/* let propertyName = "c";

// let rank = {
//     a: 1,
//     b: 2,
//     [propertyName] : 3
// };

// console.log(rank.c);

let name = "fullName";

class Person {
    constructor(fname, lname, age, address){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
    };
    get [name](){
        return `My name is ${this.fname} ${this.lname} and age is ${this.age}. I am living in ${this.address}`
    }
};

let person = new Person('bachan', 'kubi', 52, "Nalchapra");
let person2 = new Person('rochi', 'rema', 55, "krapur");
let person3 = new Person('buchi', 'hajong', 89, 'pubpara');
let person4 = new Person('delwar', 'majong', 45, 'baluchora');

console.log(person. fullName);
console.log(person2. fullName);
console.log(person2. fullName);
console.log(person2. fullName);
*/

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying so high');
    }
}

class Dog extends Animal {
    constructor(bark) {
        super(bark);
    }
    bark() {
        console.log('dogs barking loudly! ');
    }
}

let bird = new Bird(7);
let dog = new Dog(7);

bird.walk();
bird.fly();
dog.bark();