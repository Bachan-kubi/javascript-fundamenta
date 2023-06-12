let person = {
  fname: 'Bachan',
  lname: 'kubi',
  age: 39,
  address: [
    {
      village: "Birisir",
      Po: "Durgapur",
      Dist: "Netrakona",
    },
  ],
  greet: function(){
    console.log('Hello!')
  },
  getFullName: function(){
    // return this.fname +' ' + this.lname;
    // return `my name is ${this.fname} ${this.lname}. I am living in ${this.address[0].village} `;

    return `my name is ${this.fname} ${this.lname}. I am living in ${person.address[0].village}, ${person.address[0].Po}, ${person.address[0].Dist}.`;
  },
};

console.log(person.getFullName())

