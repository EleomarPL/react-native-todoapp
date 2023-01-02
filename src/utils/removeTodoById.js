export const removeTodoById = ({ todoS, id }) => {
  const $todos = [...todoS]

  return $todos.filter(todo => todo.id !== id)
}
