import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import Main from './src/Main'
import { TodosProvider } from './src/contexts/TodosContext'

export default function App () {
  return (
    <SafeAreaView style={ styles.container } forceInset={ { vertical: 'never' } }>
      <TodosProvider>
        <Main />
      </TodosProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    maxHeight: '95%',
    overflow: 'hidden',
    marginTop: Constants.statusBarHeight
  }
})
