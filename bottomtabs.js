import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Dashboard from './src/screens/Dashboard';
import Location from './location';
import Contractorlist from './src/screens/Contractorlist';
import Report from './src/screens/Report';
// import Events from './Events';
// import HomeNavigator from './HomeNavigator';
// import Dashboard from './dashboard';
// import Profile from './Profile';
// import News from './News';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ route }) => {
  return (
    <Tab.Navigator
      // initialRouteName="Home"

      independent={true}
      screenOptions={{
        tabBarActiveBackgroundColor: "#FFFFFF",
        tabBarInactiveBackgroundColor: "#FFFFFF",

      }}
    >
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarLabel: 'Locations',
          tabBarColor: 'blue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        options={{
          headerShown: false,
          // title:'Project Details'
          tabBarLabel: 'Dashboard',
          tabBarColor: '#1f65ff',

          tabBarIcon: ({ color }) => (
            <Icon name="md-desktop-outline" color={color} size={26} />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="Report"
        options={{
          headerShown: false,
          tabBarLabel: 'Report',
          tabBarColor: '#000000',
          tabBarIcon: ({ color }) => (
            <Icon name="analytics-sharp" color={color} size={26} />
          ),
        }}
        component={Report}
      />
      <Tab.Screen
        name="Contractorlist"
        component={Contractorlist}
        options={{
          headerShown: false,
          tabBarLabel: 'Contractors',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="person-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabs;
