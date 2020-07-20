import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

function PlayerCard(props){
   return(
       <View style={styles.column}>
           <Text>{props.playerName}</Text>
           <Image
                source={{uri: props.choice.uri}}
                resizeMode="contain"
                style={styles.choiceImage}
           />
           <Text>{props.choice.name}</Text>
       </View>
     
   );
}
const styles= StyleSheet.create({
    column: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    choiceImage:{
        width: 180,
        height: 150,
    },
});

export default PlayerCard;