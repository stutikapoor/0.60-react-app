/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import homeScreen from './components/homeScreen';
import detailsScreen from './components/detailsScreen';

export const RootStack = createDrawerNavigator(
  {
      homeScreen:homeScreen,
      detailsScreen:detailsScreen
  },
  {
      initialRouteName: "homeScreen",
      activeTintColor: "#fff",
      drawerBackgroundColor: "red",
      flex: 1,

      contentOptions: {
          activeTintColor: "white",
          inactiveTintColor: "green",
          
      }
  }
)


const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render(){
    return (
      <View style={{backgroundColor:'blue',height:'100%',width:'100%'}}>
        <AppContainer/>
      </View>
      
  );
  }
  
};

