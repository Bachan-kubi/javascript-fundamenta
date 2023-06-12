// function assigned to variables 

// const plusFive = (number)=>{
//     return number + 5;
// };

// let f = plusFive;
// // console.log(plusFive(5));

// console.log(f(10));


// ** reduce method
// const arr = [1, 2, 3, 5];
// // 
// const reducer = arr.reduce(()=>console.log('kk', arr));
// // const reduce = arr.reduce((accumulator, currentValue)=>{
// //     return accumulator+currentValue;
// // });

// console.log(reducer);

// * callback fucntion
// function isEven (n){
//     return n % 2 == 0;
// };
// const printMsg = (evenNo, num)=>{
//     let result = evenNo(num);
//     console.log(`${num} is a even number: ${result}`)
// };

// printMsg(isEven, 4);

// map
// const members = ['ami', 'tumi', 'rachi', 'bachi', 'achi', 'khachi', 'mang'];
// const allMembers = document.getElementById('m');
// const announcement = members.map(member=>{
//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('card');
//     cardDiv.innerHTML = `<h2>${member}</h2>`;
//     allMembers.appendChild(cardDiv);
//     console.log(allMembers)
//     // return (`${member}, would you join in the party?`)
// });
// console.log(announcement)

// const members = ['ami', 'tumi', 'rachi', 'bachi', 'achi', 'khachi', 'mang'];
// const allMembers = document.getElementById('m');
// const announcement = members.map(member => {
//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('card');
//     cardDiv.innerHTML = `<h2>${member}</h2>`;
//     allMembers.appendChild(cardDiv);
// });

// No need to call announcement() since map() already executes the code

// forEach 
// const numbers = [12, 10, 15];

// numbers.forEach(number=>{
//     console.log(number +2);
// });

// filter 

const numbers = [10, 4,3, 7, 5, 15, 20, 23, 21];
const result = numbers.filter(n=>{
    return n>5;
});

console.log(result);




