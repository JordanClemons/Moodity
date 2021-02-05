import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles.js';

const CalendarScreen = ({navigation}) =>{

    return(
        <View style={styles.homeContainer}>
            <View style={styles.homeText}>
                <Text style={styles.title}>Calendar</Text>
                <Text style={styles.subtitle}>How are you feeling today?</Text>
            </View>
      </View>
    );
};

export default CalendarScreen;