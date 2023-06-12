const app = new class {
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(`Starting the  ${this.name}`)
    }
}
('ki je');

app.start();