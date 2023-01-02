export const updateTodoById = ({ todoS, id }) => {
  const $todos = [...todoS]

  const findIndex = $todos.findIndex(todo => todo.id === id)

  if (findIndex !== -1) {
    $todos[findIndex] = {
      ...$todos[findIndex],
      isCompleted: !$todos[findIndex].isCompleted
    }
  }
  return $todos
}
