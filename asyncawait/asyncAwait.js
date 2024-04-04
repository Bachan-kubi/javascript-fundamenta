// async function f(){
//     try {
//         let r = await fetch("https://jsonplaceholder.typicode.com/users");
//         let c= await r.json();
//         console.log(c);
//     } 
//     catch (error) {
//         console.log(error);
//     }
// }
// f();

function loadJson(url) {
    console.log(url)
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then(d=>console.log(d))
  }
  
  loadJson('https://jsonplaceholder.typicode.com/users');