import React from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './styles';
const ButtonComp=(props)=>{

    const { type, content, onPress } = props;
    return(
        <View style={styles.container}>
            <Pressable style={styles.button} 
            onPress={() => onPress()}
            >
                <Text style={styles.text}>Place Order</Text>
                
            </Pressable>

        </View>

    );
};


export default ButtonComp;
