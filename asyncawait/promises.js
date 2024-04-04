const newData = ()=>{
    const data = fetch("https://jsonplaceholder.typicode.com/comments");
    data
        .then(result=>result.json())
        .then(datas=>displayData(datas))
        .catch(e=>console.log(e))
}
const displayData = (data)=>{
    console.log(data);
    const output = document.getElementById('output');
    output.classList.add('bg');
    output.style.background = 'teal';
    data.forEach(i=>{
        
        output.innerHTML +=`
            <h3>${i.body}</h3>        
            <h6>${i.email}</h6>        
            <h3>${i.id}</h3>        
        `
    })
    
}

newData();