// 1 method
// let user = {address:
//     {street: 'ramu'},
// };

// console.log(user.address? user.address.street : 'nai');

// 2
// let user = {};

// console.log(user?.address?.street);

let key = 'firstName';

let user1 = {
    firstName: 'kubi'
};

console.log(user1?.[key]);