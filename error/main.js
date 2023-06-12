const age =10;

try {
    if(age<17){
        throw('you are not adunlt! ')
    } else{
        console.log('you are adult')
    }
} catch (error) {
    console.log('please find out the errors here!')
    console.log(error);
} finally{
    console.log('code is always run here! ')
}