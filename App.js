import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import Main from './src/Main'

export default function App () {
  return (
    <SafeAreaView style={ styles.container }>
      <Main />
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
