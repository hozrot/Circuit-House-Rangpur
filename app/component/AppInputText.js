import React from 'react';
import { View,StyleSheet,TextInput } from 'react-native';
import{MaterialCommunityIcons } from '@expo/vector-icons';


function AppInputText({icon , ...otherProps}) {
    return (
       <View style={styles.container}>
           {icon && <MaterialCommunityIcons name={icon}
           size={20} color={'#D22B2B'} style={styles.icon} />}
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
        padding:15,
        marginVertical:10,

    },
    textInput:{
        fontSize: 18,

    },
    icon:{
        marginRight: 10
    }
     
})
export default AppInputText;