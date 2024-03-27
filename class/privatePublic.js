class CoffeeMachine {
    _waterAmount = 0;

    get waterAmount() {
        return this._waterAmount;
    }

    set waterAmount(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Invalid water amount. Please provide a valid number greater than or equal to 0.");
        }
        this._waterAmount = value;
    }

    constructor(power) {
        this._power = power;
    }
}

let cof = new CoffeeMachine(100);

cof.waterAmount = 200; 
console.log(cof.waterAmount)// This will set the water amount to 200
console.log(cof._power)// This will set the water amount to 200
