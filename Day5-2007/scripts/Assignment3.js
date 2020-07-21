// Using promises/async await/fetch get the random todos from the json placeholder api.
// And log all the completed todos to the console.
// API Endpoint : ​https://jsonplaceholder.typicode.com/todos

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const completedTodos = data.filter((todo) => todo.completed);
    console.log(`Promise based output : `, completedTodos);
  })
  .catch((err) => console.log("Error occured in promise : ", err));

const completed = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const completedTodos = data.filter((todo) => todo.completed);
    console.log(`async await based output : `, completedTodos);
  } catch (err) {
    console.log("Error occured in async await : ", err);
  }
};

completed();
