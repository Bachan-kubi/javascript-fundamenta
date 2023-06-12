// function Person(name){
//     this.name = name;
// };

// Person.prototype.getName= function (){
//     return this.name;
// };

// let john = new Person('Kubi');
// console.log(john.getName());

class Person{
    constructor(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

};

let john = new Person("john", "marak");
let feel = new Person("felix", "kubi");
let smrity = new Person("smrity", "marak", 52);
// let name = john.getName()
// console.log(smrity);

console.log('async_hooks')
