function pow(x, n){
    if(n==1){
        return x
    } else{
        return pow(x, n-1) +x;
    }
};
let result = pow(3, 3);
console.log(result)