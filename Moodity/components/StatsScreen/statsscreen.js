import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const StatsScreen = ({navigation}) =>{

    return(
        <View style={styles.homeContainer}>
            <View style={styles.homeText}>
                <Text style={styles.title}>Stats</Text>
                <Text style={styles.subtitle}>How are you feeling today?</Text>
            </View>
      </View>
    );
};

export default StatsScreen;