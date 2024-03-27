// const promise = new Promise(function(req, res){
   
    
//     setTimeout(()=>{
//         console.log('promise resolved');
//     }, 1000)
// });

// const pr = new Promise(function(req, res){
//     setTimeout(()=>res(new Error('wo')), 1000);
// });

// pr.then(
//     r=>console.log('r'),
//     e=>console.log(e)
// )
const pt= new Promise((resolve, reject)=>{
    
});
console.dir(pt);

// function fetchData(){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             const data = {msg: 'its dne!'}
//             resolve(data);
//         }, 1000);
//     });
// }

// function disData(data){
//     const out = document.getElementById("output");
//     out.innerHTML = data.msg;
// }

// function disE(err){
//     const out = document.getElementById("output");
//     out.innerText = "Error:" + err;
// }

// fetchData()
//     .then(data=>{
//         console.log(data.msg)
//         disData(data)
//     })
//     .catch(e=>{
//         disE(e)
//         console.log(e)
//     });

// const promises = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve();
//         }, 2000);
//     });
// }
// promises()
//     .then(
//         res=>console.log('d')
//     )
//     .catch(e=>console.log(e))


async function newPromise(){
    const p = new Promise(function(resolve, reject){
        setTimeout(()=>resolve("doe!"), 2000);
    });
    let result = await p;
    console.log(result);
}
newPromise();

