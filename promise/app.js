// A-blocking behaviours

// function getUsers(){
//     return [
//         {name: 'kubi', age: 25, email: 'kubi@gmail.com'},
//         {name: 'john', age: 30, email: 'john@gmail.com'},
//         {name: 'jane', age: 27, email: 'jane@gmail.com'}
//     ]
// };

// function findUsers (matched){
//     const users = getUsers();
//     const user = users.find((user)=>user.name === matched);
//     return user;
// };

// console.log(findUsers('kubi'));

//  b method
// function getUsers(){
//     let users;
//         setTimeout(()=>{
//             users = [
//                 {name: 'kubi', age: 25, email: 'kubi@gmail.com'},
//                 {name: 'john', age: 30, email: 'john@gmail.com'},
//                 {name: 'jane', age: 27, email: 'jane@gmail.com'}
//             ];
//         }, 1000);
//         return users;
//     };

//     function findUsers (matched){
//         const users = getUsers();
//         console.log('getusers', users
//         )
//         const user = users.find((user)=>user.name === matched);
//         return user;
//     };

//     console.log(findUsers('kubi'));

// c

// function getUsers(callback){
//         setTimeout(()=>{
//             callback([
//                 {name: 'kubi', age: 25, email: 'kubi@gmail.com'},
//                 {name: 'john', age: 30, email: 'john@gmail.com'},
//                 {name: 'jane', age: 27, email: 'jane@gmail.com'}
//             ]);
//         }, 1000);
//     };

//     function findUsers (matched, callback){
//         getUsers((users)=>{
//             const user = users.find((user)=>user.name === matched);
//             callback(user);
//         });
//     };

//     findUsers('john', console.log);

// d

function getUsers() {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve([
          { name: "kubi", age: 25, email: "kubi@gmail.com" },
          { name: "john", age: 30, email: "john@gmail.com" },
          { name: "jane", age: 27, email: "jane@gmail.com" },
        ]);
      }, 1000);
  })
};

function onFullFilled(users){
    console.log(users);
};



const promise = getUsers();
promise.then(onFullFilled);