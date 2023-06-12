// let table = document.body.firstElementChild;
// console.log(table);

//     for (let i = 0; i < table.rows.length; i++) {
//       // console.log(i);
//       let row = table.rows[i].cells[i];
//       console.log(row);
//       // 1
//       // row.cells[i].style.backgroundColor = 'red';
//       // 2
//       row.style.background='green';
//       row.style.color='red';
//     }


  let form = document.getElementsByName('my-form')[0];
console.log(form)
  // find by class inside the form
  let articles = form.getElementsByClassName('article');
  console.log(articles.length);
  alert(articles.length); // 2, found two elements with class "article"