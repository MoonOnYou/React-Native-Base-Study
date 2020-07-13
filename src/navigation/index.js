import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'screen/HomeScreen';
import HomeScreen2 from 'screen/HomeScreen2';

const StackNavigator = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Home">
        <StackNavigator.Screen name="Home" component={HomeScreen} />
        <StackNavigator.Screen name="Home2" component={HomeScreen2} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
