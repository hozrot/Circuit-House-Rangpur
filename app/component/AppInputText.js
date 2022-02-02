import React from 'react';
import { View,StyleSheet,TextInput } from 'react-native';
import{MaterialCommunityIcons } from '@expo/vector-icons';


function AppInputText({icon , ...otherProps}) {
    return (
       <View style={styles.container}>
           {icon && <MaterialCommunityIcons name={icon}
           size={20} color={'#6a5acd'} style={styles.icon} />}
           <TextInput style={styles.textInput} {...otherProps}/>

       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#a3d9c9',
        borderRadius: 25,
        flexDirection:'row',
        width:'100%',
        padding:10,
        marginVertical:2,

    },
    textInput:{
        fontSize: 18,

    },
    icon:{
        marginRight: 10
    }
     
})
export default AppInputText;