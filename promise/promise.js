function displayData(value){
    document.getElementById("demo").innerHTML = value;
};

let data = new Promise(function(resolve, reject){
    let x = 0;
    if(x===0){
        resolve('Its working!')
    }else{
        reject("Error! Something went wrong!")
    };
});

data.then(
    function(v){displayData(v)},
    
).catch(function(e){displayData(e)})
















// // will display data 
// function display(value){
//     document.getElementById('pro').innerHTML = value;
// };
// // create promise objects
// const myPromise = new Promise((res, rej)=>{
//     let x = 0;
//     if(x===2){
//         res('ok');
//     }else{
//         rej('error');
//     };
// });
// // call promise object 
// myPromise.then(function(v){display(v)},function(e){display(e)});


// // second method

// let data = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 1000);
//     setTimeout(function() { myReject("I hate You !!"); }, 1000);
//   });
  
//   data.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
//   });