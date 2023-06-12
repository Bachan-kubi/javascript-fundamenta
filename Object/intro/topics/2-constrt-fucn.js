
function Person(firstName, lastName, age, village, dist){
    this.name = firstName;
    this.last = lastName;
    this.age = age;
    this.village = village;
    this.dist = dist;
}
// create a person object
const myMother = new Person('Aruna', 'kubi', 60, 'Nalchapra', 'Netrakona');
// Father new object 
const myFather = new Person('Dhiman', 'Rema', 65, 'Baluchora', 'Netrakona')
// display mother name
document.getElementById('demo').innerHTML = `<h4>My mother name is ${myMother.name} ${myMother.last}. He is ${myMother.age} years old. She live in ${myMother.village} and She lives in ${myMother.dist}</h4>`;

// display father information
document.getElementById('father').innerHTML = `
My Father name is ${myFather.name} ${myFather.last}. He is ${myFather.age}. He is living in ${myFather.village}.
`
