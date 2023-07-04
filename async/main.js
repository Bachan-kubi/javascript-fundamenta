// function display(value){
//     document.getElementById('demo').innerHTML = value;
// }


// async function wait(){
//     console.log('jfdjfkdj')
//     return "Hellow mall";
// };

// // wait();

// function myFunction() {
//     return Promise.resolve("Hello");
// }
// //  console.log(myFunction());

// myFunction().then(
//     function(v){display(v)},
//     function(v){wait(v)}
// );

// async function loadData(){
//     const data = new Promise(function(res, rej){
//         setTimeout(function(){
//             res('I love coding');
//         }, 2000);
//     });
//     document.getElementById('wait').innerHTML = await data;
// };
// loadData();



// myLove();

// function myLove(){
//     console.log('Oh my love!');
// };

// (function(){
//     console.log('self invoking function!')
// })();

// function add(...numbers){
//     let add = 0;
//     for(let number of numbers){
//         add += number;
//         console.log(add)
//     };
// };

// add(10, 5, 2, 3); // 10, 15, 17, 20


// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function (city, country) {
//       return this.firstName + " " + this.lastName +" " +city +" "+ country;
//     //   return myObject.firstName + " " + myObject.lastName;
//     }
//   };
// //  console.log(myObject.fullName());
// const person = {
//     firstName: "Bachan",
//     lastName: "Kubi"
// }    
// // console.log(myObject.fullName.call(person));
// console.log(myObject.fullName.apply(person, ["bd", "cd"]));
// const gerson = {
//     firstName: "rita",
//     lastName: "makar",
//     age: 30
// };
// console.log(myObject.fullName.call(gerson, "mita", "gita"));
// document.getElementById('cl').innerHTML = myObject.fullName.call(gerson, "Dhaka", 'Banlgadesh')


// const family = {
//     firstName: "kubi",
//     lastName: "ghagra",
//     fullName: function (){
//         return this.firstName + this.lastName;
//     }
// };

// const rema = {
//     firstName: 'Rema',
//     lastName: 'jambil'
// };

// const newFamily = family.fullName.bind(rema);
// document.getElementById('b').innerHTML = newFamily();


// function m(){
//     let a = 3;
//     return a*a;
// };
// console.log(m());

// let x = 3;
// function n(){
//     return x+x
// };
// console.log(x);
// console.log(n());


(function(){
    let a = 2;
    let add = function(){
    var b = 5;
    return function(){
        return a+ b;
    };
    
}
console.dir(add);
})();

