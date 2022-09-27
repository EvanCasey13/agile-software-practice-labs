fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
    const todosNotCompletedByUser = todos.reduce((acc, todo) => {
      todo.completed
        ? acc
        : acc.push({ userId: todo.userId, title: todo.title }) ;
      return acc;
    }, []);
    console.log(todosNotCompletedByUser);
  })
  .catch(function(err) {
    console.log(err);
  });
