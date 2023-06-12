// // 1. First, create an anonymous function and practice how to use the map method.Create an anonymous function and set it equal to a variable. Your function should: If passed a number, return the tripled value. If passed a string, return the string "ARRR!" If NOT passed a number or string, return the data unchanged.

// let myFunc = function(num){
//     if(typeof num === "number"){
//         return num;
//     }else if(typeof num === 'string'){
//         return 'ARRR'
//     } else{
//         return num;
//     }
// }

// // 2
// let arr = ['Elocution', 21, 'Clean teeth', 100];
// let map = arr.map(a=>{
//     // return a*3;
//     // return a;
//     //replate string with arr
//     if(arr === 'string'){
//         arr.value = 'ARRa'
//     }
//     return arr;
// });

// // ternary operator 
// // condition ? expression in true: expession in false;
// let age = 15;
// let message;
// // option 1
// // age>= 16 ? (message = 'u can drive cars!'): (message='u cant drive cars under age');
// // console.log(message)

// // option 2

let arr = [2,3,4,5];
let b = arr.map(test)

function test(x){
    return x*5;
}
document.write(b);
