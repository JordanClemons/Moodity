import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles.js';
import DateFrag from './datefrag/datefrag.js';
import PickerFrag from './pickerfrag/pickerfrag.js';

const MoodScreen = ({navigation}) =>{

    return(
        <View style={styles.homeContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}>
                    <DateFrag/>
                    <PickerFrag/>
                </View>
            </View>
      </View>
    );
};

export default MoodScreen;