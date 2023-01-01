import { useState, createContext } from 'react'

const TodosContext = createContext({})

export const TodosProvider = ({ children }) => {
  const [todoS, setTodoS] = useState([])

  return (
    <TodosContext.Provider value={ { todoS, setTodoS } }>
      { children }
    </TodosContext.Provider>
  )
}

export default TodosContext
