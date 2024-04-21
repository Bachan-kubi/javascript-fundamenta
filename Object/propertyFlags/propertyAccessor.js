const users = {
    name: 'kubi',
    surname: 'Bachan',
    get fullName(){
        return `${this.name} ${this.surname}`
    },
    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }
}
// console.log(users.fullName);
users.fullName = 'Smrity X';
console.log(users.name);
console.log(users);

