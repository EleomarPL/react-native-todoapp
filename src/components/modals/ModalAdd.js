import { Alert, Modal, Text, Pressable, View, StyleSheet, TextInput, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useContext, useState } from 'react'
import uuid from 'react-native-uuid'

import TodosContext from '../../contexts/TodosContext'

const ModalAdd = ({ visible, setVisible }) => {
  const [inputTodo, setInputTodo] = useState('')
  const { todoS, setTodoS } = useContext(TodosContext)

  const handleAddTodo = () => {
    if (inputTodo.trim() !== '') {
      const newTodo = { id: uuid.v4(), text: inputTodo }

      setTodoS([...todoS, newTodo])
      handleCloseModal()
    }
  }
  const handleCloseModal = () => {
    setInputTodo('')
    setVisible(!visible)
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={ true }
        visible={ visible }
        onRequestClose={ () => {
          Alert.alert('Modal has been closed.')
          setVisible(!visible)
        } }
      >
        <View style={ styles.centeredView }>
          <View style={ styles.modalView }>
            <Text style={ styles.modalText }>Crear tarea</Text>
            <Image
              source={ require('../../../assets/added.png') }
              style={ styles.image }
              resizeMode="contain"
            />
            <TextInput style={ styles.textInput }
             placeholder="Escribe tu tarea..."
             value={ inputTodo }
             onChangeText={ setInputTodo }
             autoFocus
          />
            <View style={ styles.containerButtons }>
              <Pressable
                style={ [styles.button, styles.buttonAdd] }
                onPress={ handleAddTodo }
              >
                <View style={ { flexDirection: 'row', alignItems: 'center' } }>
                  <Ionicons name="add" size={ 24 }
                    style={ styles.textModal }
                  />
                  <Text style={ styles.textModal }>Agregar</Text>
                </View>
              </Pressable>
              <Pressable
                style={ [styles.button, styles.buttonClose] }
                onPress={ handleCloseModal }
              >
                <Text style={ styles.textModal }>Salir</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textModal: {
    color: 'white',
    fontSize: 15
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 0.5,
    width: '100%',
    padding: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width: '80%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingHorizontal: 20
  },
  buttonAdd: {
    backgroundColor: '#0d6efd',
    marginTop: 10
  },
  buttonClose: {
    backgroundColor: 'gray',
    marginTop: 10
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default ModalAdd
