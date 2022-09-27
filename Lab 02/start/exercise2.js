fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     const titles = todos.map((todo) => todo.title
     )
     console.log(titles)
  })
  .catch(function(err) { 
    console.log(err);
  });
