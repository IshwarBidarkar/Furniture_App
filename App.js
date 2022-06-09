/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
//import {firebase} from './Firebase/firebase';
//import * as firebase from '@react-native-firebase/app';
//import * as firebase from 'firebase';
//import{firebaseConfig} from './config';
//firebase.initializeApp(firebaseConfig);

//import * as firebase from 'firebase';
//import{firebaseConfig} from './config';
//firebase.initializeApp(firebaseConfig);

import {Button,StyleSheet,Text,Linking, View,StatusBar,TextInput } from 'react-native';
import FurnitureList from './components/FurnitureList';
import SubmitForm from './components/SubmitForm';
import { sendAccessibilityEvent } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import { color } from 'react-native-reanimated';

class App extends React.Component {
  /*
  componentDidMount(){
    const myitems= firebase.database().ref("FurnitureItems")
      myitems.on("value",datasnap=>{
          console.log(datasnap.val())
      })
  }
  */
 /*
 componentDidMount(){
   const myitems=firebase.database().ref("FurnitureItems")
   myitems.on("value",datasnap=>{
     console.log(datasnap.val())
   })
 }
 */

  render(){
    
    const number=9028568911;

    return (/*
      <View style={styles.buttoncontainer}>
        <FurnitureList></FurnitureList>
        <Button style={styles.buttoncontainer} onPress={()=>{this.props.navigation.navigate("Enter_Details")}}
              title="Place Order"/>
        <StatusBar style="auto" />
        
      </View>
    */
      <View style={styles.buttoncontainer}>
      <FurnitureList></FurnitureList>
      <Button style={styles.buttoncontainer} 
      onPress={()=>{this.props.navigation.navigate("Enter_Details")}}
            title="Place Order"/>
      
                  <StatusBar style="auto" />
    <View style={{marginTop:3}}>
    <Button title="Contact Us" style={styles.buttoncontainer} onPress={()=>
      {Linking.openURL('tel:'+number)}}></Button>

      </View>  
    </View>

   
      );
  }
  }
  class SubmitFor extends React.Component{

    constructor()
    {
        super();
    this.state={
        name:"",
        phone:"",
        Email:"",
        item_name:"",
        
    
    }
    
    }
    
    
    
    render(props)
    {
    
    const sendEmail=()=>{
        console.warn("All states",this.state);
    
    }
    
        return(
            <View>
                <TextInput placeholderTextColor='#800080' placeholder='Enter name'
                style={styles.textBox}
                 onChangeText={
                    (text)=>{this.setState({name:text})}
                }></TextInput>
    
                <TextInput placeholderTextColor='#800080' placeholder='Enter Furniture Item name'
                style={styles.textBox}
                 onChangeText={
                    (text)=>{this.setState({item_name:text})}
                }></TextInput>
    
                <TextInput placeholderTextColor='#800080' placeholder='Enter mobile no'
                style={styles.textBox}
                 onChangeText={
                    (text)=>{this.setState({phone:text})}
                }></TextInput>
    
                <TextInput placeholderTextColor='#800080' placeholder='Enter Email'
                style={styles.textBox}
                 onChangeText={
                    (text)=>{this.setState({Email:text})}
                }></TextInput>
            
            <Button onPress={()=>{Linking.openURL('mailto:ibidarkar77@gmail.com?subject=Placed order for: '+this.state.item_name+'&body=Customer Details:\nName: '+this.state.name+'\nPhone: '+this.state.phone+'\nEmail: '+this.state.Email)
}} title="Submit"></Button>
    
            </View>
    
    
    
        );
    
    }
    
    }
    
    
    
    
  
  
  
  const an=createStackNavigator({
  Home:{
    screen:App
  },
  Enter_Details:{
    screen:SubmitFor
  }
  
  })
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttoncontainer:{
      position:"relative",
      bottom:70,
      width:'100%',
      marginBottom:80
  
    },
    textBox:{
  
      borderColor:"skyblue",
      color:"black",
      borderWidth:2,
      padding:10,
      marginHorizontal:20,
      marginVertical:25,
  },
  
  
  
  });
  
  
  export default createAppContainer(an);
  




























