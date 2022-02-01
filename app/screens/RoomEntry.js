import React ,{ useState } from 'react';
import { Text,View,StyleSheet,Button, TextInput ,ScrollView,Platform,KeyboardAvoidingView, DatePickerIOSBase} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import NumericInput from 'react-native-numeric-input'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppInputText from '../component/AppInputText';



const Stack = createNativeStackNavigator();

function RoomEntry({navigation}) {
    const [fromdate, setFromdate] = useState(new Date());
    const [todate, setTodate] = useState(new Date());
    const [mode, setMode] = useState('date');

    const ontoChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setTodate(currentDate);
        };
    const onfromChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setFromdate(currentDate);
        };

  

  
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
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={fromdate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onfromChange}
                        />
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={fromdate}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={onfromChange}
                        />
         
                </View>
                <View style={styles.FormElement} >
    
                    <Text style={styles.BodyText}>
                    To : 
                    </Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={todate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={ontoChange}
                        />
                        {/* <DateTimePicker
                        testID="dateTimePicker"
                        value={todate}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={ontoChange}
                        /> */}
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
  
                        <AppInputText  icon='home'
                        placeholder="Guest Full Name"/>
                    </View>
                        <AppInputText  icon='home'
                        placeholder="Office Address"/>
                        
                        <AppInputText  icon='home'
                        placeholder="Phone no."/>         
                    

                        <AppInputText  icon='home'
                        placeholder="Details "/>          
                   
                
                </View>
                
               
               
                <View style={styles.Footer}>
                   <Button 
                     title="Book now"
                     color="#fff"
                     onPress={() => navigation.navigate('CheckOut')}
                    />
                </View>
    
    
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
            flex: 1,
            margin:10
        },
        BodyText:{
            fontWeight:'bold',
            fontSize:25,
            padding:20,
            textAlign:'center'    
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