function lookUpProfile(name, prop){
  let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
  ];
  
  for (let i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

/*Sure! Let me explain this code in more detail:

The for loop is used to iterate over the contacts array. It starts with i = 0 and continues until i is no longer less than contacts.length. contacts.length is the number of elements in the contacts array.

The if statement checks if the firstName property of the current contacts[i] object is equal to the name argument passed to the function. If it is true, then we proceed to the next step.

The inner if statement uses the hasOwnProperty method to check if the prop argument passed to the function is a valid property of the current contacts[i] object. If it is true, then we return the value of that property by accessing it using square bracket notation contacts[i][prop].

If the prop argument is not a valid property of the current contacts[i] object, then we return the string "No such property".

If the name argument is not found in any of the contacts[i].firstName properties, then the for loop will finish without hitting a return statement and we return the string "No such contact".*/