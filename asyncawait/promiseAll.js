const allPromise = Promise.all([
    new Promise((resolve)=>setTimeout(()=>resolve(1),3000)),
    new Promise((resolve)=>setTimeout(()=>resolve(2),3000)),
    new Promise((resolve)=>setTimeout(()=>resolve(3),3000)),
    new Promise((resolve)=>setTimeout(()=>resolve(3),3000)),
]);

allPromise
.then((r)=>console.log(r))

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise of the fetch
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => console.log(`${response.url}: ${response.status}`)
    ));

    const p = new Promise(()=>{});
    console.log(p)