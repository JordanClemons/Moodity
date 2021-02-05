import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MoodScreen from './MoodScreen/moodscreen';

const DetailStack = createStackNavigator();

//Function for the header and menu button
const StackScreen = ({navigation, title, component}) =>{

    return(
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
            <DetailStack.Screen name={title} component={MoodScreen} options={{
              title: 'Moodity',
              headerLeft: () => (
                <Icon.Button name="ios-menu" size={30} color='#1A1A1A' backgroundColor='#F3DD6D' onPress={() => navigation.openDrawer()}></Icon.Button>
              )
              }}/>
          </DetailStack.Navigator>
    );
};

export default StackScreen;