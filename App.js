import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import AppHeader from './components/AppHeader'

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <HomeScreen/>
      </View>
    )
  }
}