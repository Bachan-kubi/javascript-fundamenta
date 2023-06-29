// let char = new Set(['a', 'b', 'c', 'c']);

// console.log(char instanceof Set);
// console.log(char.size);

let letters = new Set();

letters.add('a')
letters.add('b')
letters.add('c')
letters.add('k')

console.log(letters.values)

let text = '';

letters.forEach(l=>{
    text+=l + "<br>";
});
// document.getElementById('demo').innerHTML = text;


let map = new Map([['j', 600], ['d',100], ['r', 200]]);
console.log(map.set("j", 9))