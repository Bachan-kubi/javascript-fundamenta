class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    console.log(`my dog ${this.name} runs at ${this.speed} km per hour.`);
  }
  stop(speed) {
    this.speed = speed;
    console.log(`at ${this.speed} km, he stops.`);
  }
}
const lota = {
  name: "Lota",
};
const rabit = new Animal(lota.name);
rabit.run(10);
rabit.stop(0);

// steps two
class Rabit extends Animal {
  hide() {
    console.log(`my ${this.name} can hide! and can run ${this.speed} and he will stop at ${this.speed}`);
  }
  stop(){
    super.stop(58);
    console.log(`${this.name}`);
  }
};
let nobo = new Rabit("nobo");
nobo.hide();
nobo.run(10);
nobo.stop(0);
