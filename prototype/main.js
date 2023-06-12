let animal = {
    eats : true,
    walk() {
        alert('Animal Walk!');
    }
};

let rabit = {
    jumps : true,
    __proto__: animal
};

console.log(rabit.eats);
// rabit.walk();


// let animal = {
//     eats: true,
//     walk() {
//       alert("Animal walk");
//     }
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   // walk is taken from the prototype
//   rabbit.walk(); // Animal walk

