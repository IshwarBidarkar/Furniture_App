import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles=StyleSheet.create({

    container:{

        width: '100%',
        padding:10,

    },

    button:{
        backgroundColor:'red',
        height:40,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:'center'
    },

    text:{

        fontSize:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'

    }




});

export default styles;
