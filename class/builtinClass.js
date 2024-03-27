class powerArray extends Array{
    isEmpty(){
        return this.length ===0;
    }
}

let newArr = new powerArray(1,2,3,4,5,11,15,50);
console.log(newArr.isEmpty());

let filterArr = newArr.filter((i)=>i>10);;
console.log(filterArr);
console.log(filterArr.isEmpty())