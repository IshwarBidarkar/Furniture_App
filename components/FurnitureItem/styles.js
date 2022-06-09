import {StyleSheet,Dimensions} from 'react-native'

const styles=StyleSheet.create({

    ItemContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
    
      },
      titles:{
        marginTop:'20%',
        width:'100%',
        alignItems:'center'
        
      },
      title:{
        fontSize:50,
        fontWeight:'bold',
        color:'black'
    
      },
      subtitle:{
        fontSize:25,
        color:'red',
        fontWeight:'bold'
    
      },
      image:{
        height:'100%',
        width:'100%',
        position:'absolute',
        resizemode:'cover'
    
        },

        buttoncontainer:{
          position:'absolute',
          bottom:100,
          width:'100%'

        }
    



});

export default styles;