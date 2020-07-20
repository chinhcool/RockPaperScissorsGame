import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GameStatus(props){
    if(props.result==='Victory!') {
        return <Text style={styles.textWin}>{props.result}</Text>
    }
    if(props.result==='Defeat!') {
        return <Text style={styles.textLose}>{props.result}</Text>
    }
    else
    return <Text style={styles.text}>{props.result}</Text>;
}
const styles= StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "600",
        color: '#006AD1',
    },
    textWin: {
        fontSize: 40,
        fontWeight: "600",
        color: '#74AD5F',
    },
    textLose: {
        fontSize: 40,
        fontWeight: "600",
        color: '#56423C',
    },
});
export default GameStatus;