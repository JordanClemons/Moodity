import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';
import CircularPicker from 'react-native-circular-picker';

const PickerFrag = () =>{

    const [number, setNumber] = useState("How was your day?");

    return(
        <View style={{flex:.8}}>
        <CircularPicker
            size={380}
            strokeWidth={30}
            steps={[0,10,20,30,40,50,60,70,80,90]}
            backgroundColor='rgb(189, 189, 189)'
            gradients={{
                        0:  ['rgb(233, 25, 25)', 'rgb(193, 13, 13)'],
                        40: ['rgb(234, 152, 5)', 'rgb(255, 159, 0)'],
                        80: ['rgb(243, 221, 109)', 'rgb(244, 216, 70)'],
                        }}
            onChange={(v) => setNumber((v/10).toFixed(1))}
        >
            <>
                <Text style={number > 8 ? {color:'#F3DD6D', fontSize:80} : 
                number > 4 ? {color:'#EA9805', fontSize:80} : 
                number >= 0 ? {color:'#E91919', fontSize: 80} : 
                styles.blankText}>{number}</Text>
            </>   
        </CircularPicker>
        </View>
    );
};

export default PickerFrag;