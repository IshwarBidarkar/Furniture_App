import React from 'react'
import{
    View ,Button,TextInput,StyleSheet
} from 'react-native';
import styles from './styles';

import { sendAccessibilityEvent } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
//import {firebase} from '../../Firebase/firebase';

class SubmitForm extends React.Component{

constructor()
{
    super();
this.state={
    name:"",
    phone:"",
    Email:"",
    item_name:"",
    //to_name:"Ishwar",

}

}

/*
sendEmail(){
    console.warn("All states",this.state);
/*
   e.preventDefault();

    emailjs.sendForm("service_xx5s1gp","template_pm2w1nx",e.target,"e--HuL4zK916TanrI").then((result)=>{
        console.log(result.text);
    },
    (error)=>{
        console.log(error.text);
    });
   // e.target.reset()

};
*/
/*
componentDidMount(){
  const myitems= firebase.database().ref("FurnitureItems")
    myitems.on("value",datasnap=>{
        console.log(datasnap.val())
    })
}
*/
render()
{


const sendEmail=()=>{
    console.warn("All states",this.state);

}

    return(
        <View>
            <TextInput placeholder='Enter name'
            style={styles.textBox}
             onChangeText={
                (text)=>{this.setState({name:text})}
            }></TextInput>

            <TextInput placeholder='Enter Furniture Item name'
            style={styles.textBox}
             onChangeText={
                (text)=>{this.setState({item_name:text})}
            }></TextInput>

            <TextInput placeholder='Enter mobile no'
            style={styles.textBox}
             onChangeText={
                (text)=>{this.setState({phone:text})}
            }></TextInput>

            <TextInput placeholder='Enter Email'
            style={styles.textBox}
             onChangeText={
                (text)=>{this.setState({Email:text})}
            }></TextInput>

            <Button onPress={()=>sendEmail()} title="Submit"></Button>

        </View>



    );

}

}



export default SubmitForm;