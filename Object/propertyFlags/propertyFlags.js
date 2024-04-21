const user = {
    name: 'john'
}
// console.log(user);
// const descriptor = Object.getOwnPropertyDescriptor(user, "name");
Object.defineProperty(user, 'name', {writable:false});

user.name = 'nai'

console.log(user.name);