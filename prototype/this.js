let user = {
    firstName: 'Bachan',
    age: 45,
    lastName: "kubi",

    // sayHi(){
    //     console.log([this.lastName, this.age, this.lastName])
    // },
    set fullName (value){
        [this.firstName, this.age, this.lastName] = value.split(" ")
    }, 
    get fullName (){
        return(`${this.firstName} ${this.age} ${this.lastName}`)
    }
};

let admin = {
    __proto__ : user,
    isAdmin : true
};

admin.fullName = "Timtim 45 Ghagra";
admin.fullName = "Tim 45 Ghagra";
console.log(user.fullName);
console.log(admin.fullName);
// alert(admin);

// user.sayHi(); 