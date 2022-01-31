import React from 'react';
import { StyleSheet,TouchableOpacity,Text } from 'react-native';


function AppButton({ButtonName,onPress}) {
    return (
         <TouchableOpacity style={styles.appButton} onPress={onPress}>
             <Text style={styles.ButtonText}>{ButtonName} </Text>
        
         </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    appButton:{
       
        backgroundColor:'#6a5acd',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 50,
        width:'100%',
        alignSelf: 'center',
        height:"30%"
     
    },
    ButtonText:{
        fontSize:20,
        fontWeight:'800',
        color:'#fff'

    },
})
export default AppButton;