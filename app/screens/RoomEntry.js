import React ,{ useState } from 'react';
import { Text,View,StyleSheet,Button, TextInput ,ScrollView,KeyboardAvoidingView, DatePickerIOSBase} from 'react-native';
import DatePicker from 'react-native-date-picker'
import NumericInput from 'react-native-numeric-input'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function RoomEntry({navigation}) {
    return (
       
            <KeyboardAvoidingView style={styles.Container}  keyboardVerticalOffset={100} behavior={'padding'}>
               
            <ScrollView style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>  Room Name </Text>
            </View>
            <View style={styles.Body}>
                <View style={styles.timeEntry}>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                    From: 
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="Phone no "
                        keyboardType='phone-pad'
                        returnKeyType="Done"
                 />
                </View>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                To : 
                </Text>
                <TextInput
                        style={styles.input}
                        placeholder="Phone no "
                        keyboardType="phone-pad"
                 />
                </View>
                </View>
                <View style={styles.GuestEntry} >
                
    
                    <Text style={styles.BodyText}>
                    Number of Guest : 
                    </Text>
                    <NumericInput minValue={1} onChange={value => console.log(value)} />
                        
                </View>
                <View style={styles.FormElement} >
    
                <Text style={styles.BodyText}>
                Guest Details :
                </Text>
               
                    <View style={styles.guestDetalis}>
                        <Text style={styles.nameInput}> Name </Text>
                    <TextInput
                            style={styles.input}
                            placeholder="    Full Name  "
                            keyboardType="name-phone-pad"
                           
                    />
                    </View>
                    <View style={styles.guestDetalis}>
                        <Text style={styles.nameInput}> Office </Text>
                    <TextInput
                            style={styles.input}
                            placeholder="    Office Name  "
                            keyboardType="name-phone-pad"
                           
                    />
                    </View>
                    <View style={styles.guestDetalis}>
                        <Text style={styles.nameInput}> Phone  </Text>
                    <TextInput
                            style={styles.input}
                            placeholder="    Phone no.  "
                            keyboardType="name-phone-pad"
                           
                    />
                    </View>
                    <View style={styles.guestDetalis}>
                        <Text style={styles.nameInput}>Details </Text>
                    <TextInput
                            style={styles.input}
                            placeholder="   If any   "
                            keyboardType="name-phone-pad"
                           
                    />
                    </View>
                   
                </View>
               
                </View>
                <View style={styles.Footer}>
                   <Button 
                     title="Book now"
                     color="#fff"
                     onPress={() => navigation.navigate('CheckOut')}
                    />
                </View>
    
    
    
                </ScrollView>
                    </KeyboardAvoidingView>
    
            
        );
    }
    const styles = StyleSheet.create({
        Container:{
            flex: 1,
            backgroundColor: '#a3d9c9',
            
        },
        timeEntry:{
            flexDirection:'row'

        },
        Header:{
            
            backgroundColor: '#a3d9c9',
            justifyContent:'center',
            alignItems:'center'
        },
        HeaderText:{
            fontWeight:'800',
            fontSize: 20,
            textAlign: 'center',
            top:5
    
        },
        nameInput:{
            flex: .30,
            justifyContent:'flex-end',
            alignItems:'flex-end',
            fontSize:25,
            fontWeight:'bold'
            


        },
        input: {
            flex:.70,
            height: 40,
            borderWidth: 1,
            padding:10
           
           
          },
        guestDetalis:{
            flexDirection:'row',
            padding:5

        },
        GuestEntry:{
            
            justifyContent:'center',
            alignItems:'center',
            


        },
        Body:{
            flex:1,
            justifyContent:'space-around',
            paddingTop: 10
        
    
        },
        image:{
            
            width: "40%",
            height: "50%",
            
            
           
            
        },
        FormElement:{
            flex: 1
        },
        BodyText:{
            fontWeight:'bold',
            fontSize:25,
            padding:20,
           
            
    
        },
        
       
        Footer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#6a5acd',
            margin: 30,
            borderRadius:30
    
        }, 
    
    })

export default RoomEntry;