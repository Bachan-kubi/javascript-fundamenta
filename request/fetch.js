// fetch(url, {
//     method: POST,
//     headers: {
//         "Content-Type": "Application/json",
//         'apiKey': apiKey
//     },
//     body: JSON.stringify(data)
// }).then(res=>{
//     if(res.ok){
//         return res.json()
//     }
//     throw new Error('Request failed!');
// }, networkError=>{
//     console.log(networkError.message);
// })

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayData(data))
    .catch(err=>console.log(err))
}

function displayData(data){
    // console.log(data)
    // const ul = document.getElementById('data');
    const postDiv = document.getElementById('post')
    for(const user of data){
        const {name, username, email, address} = user;
        console.log(name, username);
        const div = document.createElement('div');
        div.classList.add('all')
        div.innerHTML = `
            <h1>${name}</h1>
            <h2>${username}</h2>
            <h3>${email}</h3>
            <h3>${address.street}</h3>
        `;
        postDiv.appendChild(div);
    }
    
}
loadData();




