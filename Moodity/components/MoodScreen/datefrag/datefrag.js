import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const DateFrag = () =>{

    return(
        <View style={styles.dateContainer}>
            <Text style={styles.icon}><Icon.Button name="chevron-left" size={40} color="#F3DD6D" backgroundColor='#1A1A1A' /></Text>
            <Text style={styles.date}>Today &nbsp;</Text>
            <Text style={styles.icon}><Icon.Button name="chevron-right" size={40} color="#F3DD6D" backgroundColor='#1A1A1A' /></Text>
        </View>
    );
};

export default DateFrag;