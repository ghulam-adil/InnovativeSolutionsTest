import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EmployeesScreen from '../screens/EmployeesScreen';
import WeatherScreen from '../screens/WeatherScreen';

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="EmployeesScreen"
        component={EmployeesScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
