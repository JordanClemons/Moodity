import React from 'react';
import MoodScreen from './MoodScreen/moodscreen.js';
import CalendarScreen from './CalendarScreen/calendarscreen.js';
import StatsScreen from './StatsScreen/statsscreen.js';
import SettingsScreen from './SettingsScreen/settings.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const MoodStackScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
    backgroundColor: '#1A1A1A',
    shadowColor: 'transparent'
    },
    headerTintColor: '#F3DD6D',
    headerTitleStyle: {
    fontSize: 25,
    fontWeight: '800',
  }}}>
    <HomeStack.Screen name="Moodity" component={MoodScreen}  options={({ navigation }) => ({
              title: 'Moodity',
            })}/>
  </HomeStack.Navigator>
);

const CalendarStackScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
    backgroundColor: '#1A1A1A',
    shadowColor: 'transparent'
    },
    headerTintColor: '#F3DD6D',
    headerTitleStyle: {
    fontSize: 25,
    fontWeight: '800',
  }}}>
    <HomeStack.Screen name="Calendar" component={CalendarScreen}  options={({ navigation }) => ({
              title: 'Moodity',
            })}/>
  </HomeStack.Navigator>
);

const StatsStackScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
    backgroundColor: '#1A1A1A',
    shadowColor: 'transparent'
    },
    headerTintColor: '#F3DD6D',
    headerTitleStyle: {
    fontSize: 25,
    fontWeight: '800',
  }}}>
    <HomeStack.Screen name="Moodity" component={StatsScreen}  options={({ navigation }) => ({
              title: 'Moodity',
            })}/>
  </HomeStack.Navigator>
);

const SettingsStackScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
    backgroundColor: '#1A1A1A',
    shadowColor: 'transparent'
    },
    headerTintColor: '#F3DD6D',
    headerTitleStyle: {
    fontSize: 25,
    fontWeight: '800',
  }}}>
    <HomeStack.Screen name="Moodity" component={SettingsScreen}  options={({ navigation }) => ({
              title: 'Moodity',
            })}/>
  </HomeStack.Navigator>
);

const customTabBarStyle = {
  activeTintColor: '#F3DD6D',
  inactiveTintColor: '#FFF',
  allowFontScaling: true,
  labelStyle: { fontSize: 16},
  showLabel: false,
  style: {borderTopColor: '#FFF' , backgroundColor: '#1A1A1A'},
}

const Container = () =>{

    return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Mood" tabBarOptions={customTabBarStyle}>
            <Tab.Screen name="Mood" component={MoodStackScreen} options={{tabBarIcon: ({ color, size }) => (
              <Icon name="heart-outline" color={color} size={size} />),
          }}/>
          <Tab.Screen name="Calendar" component={CalendarStackScreen} options={{tabBarIcon: ({ color, size }) => (
              <Icon name="calendar-outline" color={color} size={size} />),
          }}/>
          <Tab.Screen name="Stats" component={StatsStackScreen} options={{tabBarIcon: ({ color, size }) => (
              <Icon name="stats-chart-outline" color={color} size={size} />),
          }}/>
          <Tab.Screen name="Settings" component={SettingsStackScreen} options={{tabBarIcon: ({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />),
          }}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
};

export default Container;