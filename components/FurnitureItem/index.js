import React from 'react';
import {View,Text,ImageBackground} from 'react-native'; 
//import ButtonComp from '../ButtonComp';
//import ButtonComp from '../ButtonComp';
import styles from './styles';
import SubmitForm from '../SubmitForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
const FurnitureItem=(props)=>
{
  const { name, tagline, image } = props.Item;
  
    return(
        <View style={styles.ItemContainer}>
        <ImageBackground source={image}
         style={styles.image}></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
        
      </View>

      


      </View>
     

      

    


    );
   



}

export default FurnitureItem;
