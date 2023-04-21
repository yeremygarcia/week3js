 // Create an array of user objects called users. Each user object should have an id, name, and email property.
const users = [
    { id: 1, name: "Jim", email: "jim@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" },
    { id: 3, name: "Joe", email: "joe@gmail.com" }
  ];
  
// Implement a function called fetchUserById that accepts a user ID as an argument and returns a promise.
  function fetchUserById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(user => user.id === id);
        if (user) {
          resolve(user);
        } else {
          reject(new Error ("User not found"));
        }
      }, 1000);
    });
  }
  
  // Use fetchUserById to fetch the user with ID 1
  fetchUserById(1)
    .then((user) => {
        console.log("Retrieved user: ", user);
    })
    .catch((error) => {
        console.log("Error retrieving user: ", error);
    });
  
  // Use fetchUserById to fetch the user with ID 2
  fetchUserById(2)
    .then((user) => {
        console.log("Retrieved user: ", user);
    })
    .catch((error) => {
        console.log("Error retrieving user: ", error);
    });