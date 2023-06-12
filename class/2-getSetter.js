function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { console.log('Hi first class'); }
});

greeting.sayHi(); // 'Hi'