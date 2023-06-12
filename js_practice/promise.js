function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
      { username: 'kubi', email: 'jkue@test.com' },
    ];
  }
  
  function findUser(u) {
    const users = getUsers(); 
    const user = users.find((user) => user.username === u);
    return user;
  }
  
  console.log(findUser('kubi'));