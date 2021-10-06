import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import fbScreen from './screens/fb';
import inScreen from './screens/in';


export default function App() {
  return (
    <View style={styles.container}>
    <AppContainer />

    </View>
  );
}


const BottomTabNavigator=createBottomTabNavigator({
  fb:{screen:fbScreen},
  in:{screen:inScreen}
});

const AppContainer=createAppContainer(BottomTabNavigator);


const styles = StyleSheet.create({
  container: {
    width:400,
    height:650,
    backgroundColor: '#fff',

  },
});
