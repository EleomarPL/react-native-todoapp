import { useCallback, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, Pressable, View, FlatList, SafeAreaView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import ModalAdd from './components/modals/ModalAdd'
import TodosContext from './contexts/TodosContext'
import { getCompletedTodos } from './utils/getCompletedTodos'
import CardItemTodo from './components/views/CardItemTodo'

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [completedTodo, setCompletedTodo] = useState(0)

  const { todoS } = useContext(TodosContext)

  useEffect(() => {
    // LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    setCompletedTodo(
      getCompletedTodos(todoS)
    )
  }, [todoS])

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const renderItem = ({ item }) => (
    <CardItemTodo item={ item } />
  )

  const renderItemCallback = useCallback(renderItem, [todoS])

  return (
    <View>
      <Pressable onPress={ handleOpenModal } style={ styles.buttonAdd }>
        <Ionicons name="add-circle-sharp" size={ 24 }
          color="#0d6efd" style={ styles.iconAdd }
        />
      </Pressable>
      <View style={ styles.container }>
        <Text style={ styles.title }>Tus tareas</Text>
        <Text style={ styles.subtitle }>Completadas { completedTodo } de  { todoS.length }</Text>
      </View>
      <View style={ { width: '90%', alignSelf: 'center', maxHeight: '100%' } }>
        <FlatList
          data={ todoS }
          renderItem={ renderItemCallback }
          initialNumToRender={ 0 }
          style={ { height: '90%' } }
          nestedScrollEnabled
          keyExtractor={ item => item.id }
          ItemSeparatorComponent={ <View style={ { marginBottom: 20 } }></View> }
          ListFooterComponent={ <SafeAreaView forceInset={ { bottom: 'always' } } /> }
        />
      </View>
      <ModalAdd
        visible={ modalVisible }
        setVisible={ setModalVisible }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonAdd: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
  subtitle: {
    fontWeight: '700',
    fontSize: 20
  },
  iconAdd: {
    fontSize: 60
  },
  container: {
    alignItems: 'center'
  }
})

export default Main
