let text = '{ "employees" : [' + '{"firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
const newObj = JSON.stringify(obj)

console.log(obj)
// console.log(newObj);

let employer = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
    }

console.log(employer);
console.log(JSON.stringify(employer)); // stringfy show data as json