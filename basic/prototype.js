function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
   }
   Dog.prototype.species = "Canine";
   Dog.prototype.bark = function() {
    if (this.weight > 25) {
    console.log(this.name + " says Woof!");
    } else {
    console.log(this.name + " says Yip!");
    }
   };
   Dog.prototype.run = function() {
    console.log("Run!");
   };
   Dog.prototype.wag = function() {
    console.log("Wag!");
   };
   var fido = new Dog("Fido", "Mixed", 38);
   var fluffy = new Dog("Fluffy", "Poodle", 30);

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();


//


function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
   };

   Robot.prototype.string = function() {
    return this.name + " Robot belonging to " + this.owner;
   };
   
   var toy = new Robot("Toy", 2013, "Avary");
   var tot = new Robot("Tot", 2014, "gvary");
   console.log(toy.string());
   console.log(tot.string());