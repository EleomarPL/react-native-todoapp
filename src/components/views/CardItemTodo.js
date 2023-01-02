import { Text, View, StyleSheet, Pressable } from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { useContext } from 'react'

import TodosContext from '../../contexts/TodosContext'
import { updateTodoById } from '../../utils/updateTodoById'
import { removeTodoById } from '../../utils/removeTodoById'

const ItemCheck = ({ item }) => {
  const { todoS, setTodoS } = useContext(TodosContext)

  const handleChangeStatus = () => {
    setTodoS(updateTodoById({ todoS, id: item.id }))
  }

  return <View>
    <Pressable onPress={ handleChangeStatus }
        style={ styles.buttonCheck }
    >
      { item.isCompleted
        ? <AntDesign name="check" size={ 30 }
            color="green"
          />
        : <AntDesign name="close" size={ 30 }
            color="red"
          />
      }
    </Pressable>
  </View>
}

const CardItemTodo = ({ item }) => {
  const { todoS, setTodoS } = useContext(TodosContext)

  const handleDelete = (id) => {
    setTodoS(removeTodoById({ todoS, id }))
  }

  return (
    <View style={ styles.container }>
      <ItemCheck item={ item } />
      { item.isCompleted
        ? <Text style={ [styles.textCard, styles.textCompleted] }>
          { item.text }
        </Text>
        : <Text style={ styles.textCard }>
          { item.text }
        </Text>
      }
      <Pressable onPress={ () => handleDelete(item.id) }>
        <MaterialIcons name="delete" size={ 30 }
          color="red"
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10
  },
  textCard: {
    fontSize: 20
  },
  textCompleted: {
    textDecorationLine: 'line-through'
  },
  buttonCheck: {
    border: 'gray',
    borderWidth: 1,
    borderRadius: 10
  }
})

export default CardItemTodo
