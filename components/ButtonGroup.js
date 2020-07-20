import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CHOICES = [
  {
    name: 'Rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'Paper',
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
  },
  {
    name: 'Scissors',
    uri:
      'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  }
];
function ButtonGroup(props){
    return CHOICES.map(item => {
                return(
                <TouchableOpacity 
                key={item.name}
                style={styles.button} 
                onPress={() => props.onPressButton(item.name)}>
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
                );
    });         
}
const styles= StyleSheet.create({
    button: {
        width: 110,
        height: 43,
        alignItems: 'center',
        backgroundColor: 'brown',
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white',
    },
});

export default ButtonGroup;