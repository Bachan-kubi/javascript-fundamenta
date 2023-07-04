let btn = document.getElementById('btn');
console.log(btn);

let x = ()=>{
    document.getElementById('cnt').innerHTML = `This is addEventLister method of Javascirpt 
    `
}
let y = ()=>{
    document.getElementById('snd').innerHTML = `Adding More elements! 
    `
};
btn.addEventListener('click', x);
btn.addEventListener('click', y);

let hover = document.getElementById('hover');
hover.addEventListener("mousemove", e);

function e(){
    document.getElementById('mh').innerHTML = Math.random();
};

function removeEvn(){
    hover.removeEventListener('mousemove', e);
};

//local scope vs global scope
function wordCounter(){
    let word = "I love javascript";
    console.log(word)
};
wordCounter();
// console.log(word);

function parent(){
    let a = 4;
    function child(){
        let b = 5;
        console.log(a+b);
    };
    child();
};
parent();
// console.log(parent());
console.dir(parent());
// child();

// closures
function boro(a){
    return function (b){
        return function(c){
            return function(d){
                console.log(a+b+c+d);
            }
            
        }
    };
};
boro(10)(5)(5)(5);
// console.dir(boro(10))


// this use cases
console.log(this===window);

let Person = function(name, age, color){
    this.name = name,
    this.age = age,
    this.color = color
};

let bachan = new Person('kubi', 120, "black");
let rochi = new Person('rochita', 12, "white");

console.log(bachan.age, rochi.color);

class Fly{
    constructor(age, fname, address, year){
        this.name = fname,
        this.age = age;
        this.address = address,
        this.year = year
    }
    states () {
        console.log(`my name is ${this.age} age is ${this.name}.`)
    }
};

// create more method if no method is created in class 
Fly.prototype.desc = function(){
    console.log(`my village name is ${this.address}.`);
};
Fly.prototype.dob = function(){
    console.log(`${2023-this.year}`)
};

const rubi = new Fly("vhobi", 1984, "nalchpara", 1984);
rubi.states();
rubi.desc();
rubi.dob();

const hi = document.getElementById('hi');
let div = document.createElement('div');
div.classList.add('new');
div.classList.remove('new');
div.setAttribute('id', 'ki');
div.removeAttribute('id');
div.removeAttribute('class');
hi.appendChild(div);
const p = document.createElement('p');
p.textContent = 'new div created';
div.appendChild(p);
p.style.color = 'red';
p.style.backgroundColor = '#989561';


console.dir(hi.style);
console.log(hi.childNodes);
console.log(hi.children);
console.dir(console);


// let courses = document.getElementById('crs');

// courses.addEventListener('click', function(){
//     document.getElementById('al').innerHTML = 'This is my whole courses';
// });

function getFull(){
    document.getElementById('al').innerHTML = 'I love coding';
};

// const userInfo = getSomeData('https://aremoteserver.com');
// console.log(userInfo);

// getSomeData('https://jsonplaceholder.typicode.com/posts', (userInfo) => {
//    console.log(userInfo);
// });


// const dataFromRemote = fetch('https://jsonplaceholder.typicode.com/posts');
// dataFromRemote
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))


// const fetched = async ()=>{
//     const fetchedData = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const res = await fetchedData.json();
//     console.log(res)
// };

// fetched();

async function todoCall(){
    try{
        const todo = await fetch('https://jsonplaceholder.typicode.com/todos');
        const res = await todo.json();
        console.log(res);
    } catch(e){
        console.log(e)
    }
};
todoCall();


