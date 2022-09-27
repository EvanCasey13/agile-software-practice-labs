fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     const totalCompleted = todos.reduce( (acc, todo) => 
          todo.completed ? acc+1 : acc
     ,0
     )
     console.log(totalCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });
