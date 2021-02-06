import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';
import Icon from 'react-native-vector-icons/Ionicons';

const NoteFrag = () =>{

    return(
        <View style={styles.noteContainer}>
            <Text style={styles.noteText}>Add a note</Text>
            <Icon.Button name="create-outline" size={25} color='#1A1A1A' backgroundColor='#BDBDBD' />
        </View>
    );
};

export default NoteFrag;