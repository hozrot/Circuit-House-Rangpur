import React from 'react';
import { Text, View,StyleSheet,Button, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RoomEntry({props}) {
    return (
       
            <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>  Check In  Form </Text>
            </View>
            <View style={styles.Body}>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                    Guest Name: 
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="Name "
                        keyboardType="name-phone-pad"
                 />
                </View>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                Phone No. : 
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="Phone no "
                        keyboardType="phone-pad"
                 />
                </View>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                Office : 
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="Address "
                        keyboardType="name-phone-pad"
                 />
                </View>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                Personal :
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="P Address "
                        keyboardType="name-phone-pad"
                 />
                </View>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                Ref. Name:
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="Ref. name "
                        keyboardType="name-phone-pad"
                 />
                </View>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                Entry Date:  
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="In date "
                        keyboardType="name-phone-pad"
                 />
                </View>
                
                
               
               
                </View>
                <View style={styles.Footer}>
                   <View style={styles.Footer1}>
                   <Button 
                     title="Save"
                     color="#000"
                     onPress={() => navigation.navigate('CheckOut')}
                    />
                    
                   
                   
    
                   </View>
                    
                   
                </View>
    
    
    
            
    
            </View>
        );
    }
    const styles = StyleSheet.create({
        Container:{
            flex: 1,
            backgroundColor: '#a3d9c9'
        },
        Header:{
            flex: .30,
            backgroundColor: '#c9a0dc',
            justifyContent:'center',
            alignItems:'center'
    
        },
        HeaderText:{
            fontWeight:'800',
            fontSize: 20,
            textAlign: 'center'
    
        },
        Body:{
            flex:1,
            justifyContent:'space-around',
            paddingTop: 10
        
    
        },
        FormElement:{
            flexDirection:'row'
        },
        BodyText:{
            fontWeight:'bold',
            fontSize:25,
            padding:20,
           
            
    
        },
        input: {
            height: 40,
            margin: 15,
            borderWidth: 1,
            width:150,
            padding: 10,
            
            justifyContent:'flex-end'
          },
        Footer:{
    
            flex: .25,
            flexDirection:'row',
            backgroundColor: '#c9a0dc'
        },
        Footer1:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#f36374',
            margin: 30,
            borderRadius:30
    
    
        },
        Footer2:{
            flex:1,
            backgroundColor: '#f36374',
            justifyContent:'center',
            alignItems:'center',
            margin: 30,
            borderRadius:30
        },
    
    })

export default RoomEntry;