export const getCompletedTodos = (todos) => {
  const $todos = [...todos]

  return $todos.filter(todo => todo.isCompleted).length
}
