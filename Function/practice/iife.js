// var sum = (function() {
//     return 10 + 20; 
//  })();
//  console.log(sum)

// (function(){
//     console.log('hellow')
// })();

console.log('lifr')
function display(some){
    document.getElementById('demo').innerHTML = some;
};

function first(){
    display('hello!');
};
function second(){
    display('goodbye!')
}
// first();
// second();

function calculation(c){
    document.getElementById('cal').innerText = c;
};

function sum(a, b, myCallback){
    let total = a+b;
    myCallback(total);
};
// let result = sum(10, 20);
// display(result)
sum(10, 20, display);

function love(){
    document.getElementById('love').innerHTML = "I hate javascirpt"
};

setTimeout(love, 2000);


function time(){
    let d = new Date;
    console.log(d)
    document.getElementById('t').innerHTML = 
        d.getHours() + ":"+ d.getMinutes() + ":" + d.getSeconds();
};

setInterval(time, 1000);
