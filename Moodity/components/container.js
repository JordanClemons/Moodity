import React, {useState} from 'react';
import { View, Button } from 'react-native';
import MoodScreen from './MoodScreen/moodscreen.js';
import CalendarScreen from './CalendarScreen/calendarscreen.js';
import StatsScreen from './StatsScreen/statsscreen.js';
import SettingsScreen from './SettingsScreen/settings.js';
import StackScreen from './stackscreen.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();
const DetailStack = createStackNavigator();

const MoodStackScreen = ({navigation}) =>(
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#F3DD6D',
    },
    headerTintColor: '#1A1A1A',
    headerTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
    }
  }}>
    <DetailStack.Screen name="Mood" component={MoodScreen} options={{
      title: 'Moodity',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={30} color='#1A1A1A' backgroundColor='#F3DD6D' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      }}/>
  </DetailStack.Navigator>
)

const CalendarStackScreen = ({navigation}) =>(
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#F3DD6D',
    },
    headerTintColor: '#1A1A1A',
    headerTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
    }
  }}>
    <DetailStack.Screen name="Mood" component={CalendarScreen} options={{
      title: 'Calendar',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={30} color='#1A1A1A' backgroundColor='#F3DD6D' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      }}/>
  </DetailStack.Navigator>
)

const StatsStackScreen = ({navigation}) =>(
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#F3DD6D',
    },
    headerTintColor: '#1A1A1A',
    headerTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
    }
  }}>
    <DetailStack.Screen name="Stats" component={StatsScreen} options={{
      title: 'Stats',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={30} color='#1A1A1A' backgroundColor='#F3DD6D' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      }}/>
  </DetailStack.Navigator>
)

const SettingsStackScreen = ({navigation}) =>(
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor: '#F3DD6D',
    },
    headerTintColor: '#1A1A1A',
    headerTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
    }
  }}>
    <DetailStack.Screen name="Settings" component={SettingsScreen} options={{
      title: 'Settings',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={30} color='#1A1A1A' backgroundColor='#F3DD6D' onPress={() => navigation.openDrawer()}></Icon.Button>
      )
      }}/>
  </DetailStack.Navigator>
)



const Container = (props) =>{

    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MoodStackScreen} />
            <Drawer.Screen name="Calendar" component={CalendarStackScreen} />
            <Drawer.Screen name="Stats" component={StatsStackScreen} />
            <Drawer.Screen name="Settings" component={SettingsStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
};

export default Container;