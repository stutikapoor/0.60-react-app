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
import home from './components/home';
import aboutUs from "./components/aboutUs";
import contributeto from "./components/contributeto";
import contributions from './components/contributions';
import services from "./components/services";
import gallery from "./components/gallery";
import contact from "./components/contact";
import Certificate, { certificate } from "./components/certificate";


export const RootStack = createDrawerNavigator(
  {
      Home:home,
      AboutUs:aboutUs,
      ContributeTo:contributeto,
      Contributions:contributions,
      Services:services,
      Gallery:gallery,
      Contact:contact, 
      
  },

  {
      initialRouteName: "Home",
      activeTintColor: "#fff",
      drawerBackgroundColor: "golden",
      flex: 1,
      contentOptions: {
          activeTintColor: "white",
          inactiveTintColor: "orange",         
      }
  }
)


const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render(){
    return (
      <View style={{backgroundColor:'black',height:'100%',width:'100%'}}>
        <AppContainer/>
      </View>
      
  );
  }
};

