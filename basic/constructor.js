// function Dog (name, breed, weight){
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// };

// let devi = new Dog('pet', 'poddle', 25);
// let redi = new Dog('pki', 'mati', 10)
// let tedi = new Dog('putki', 'angn', 20)
// let qedi = new Dog('pisi', 'desi', 50)

// let dogs = [devi, redi, tedi, qedi];

// for(let i = 0; i<dogs.length; i++){
//   // console.log(dogs[i].weight);
//   let size = 'small';
//   if(dogs[i].weight > 10){
//     size = 'big';
//   };
//   console.log("Dog: " + dogs[i].name + "is a " + size +" "+ dogs[i].breed);
//   document.write("Dog: " + dogs[i].name + "is a " + size +" "+ dogs[i].breed);
// };

function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = params.started;
  this.stop = function() {
    this.started = false;
  };
  this.start = function() {
    this.started = true;
  };
  this.drive = function() {
    if (this.started) {
      console.log(this.make + " " +"Model"+" "+ this.model + " Car"+ " color" +" "+ this.color + " goes zoom zoom zoom!!");
    } else {
      console.log("Start the engine first to drive cars!");
    }
  };
}
let data = {
  make: "Chevy",
  model: "202",
  year: 2023,
  color: "red",
  passengers: 3,
  convertible: true,
  mileage: 300,
  started: false
};
let chevy = new Car(data);
// chevy.stop();
// chevy.start();
chevy.drive();
// console.log(chevy);
