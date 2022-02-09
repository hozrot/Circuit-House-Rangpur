import React ,{ useState } from 'react';
import { Text,Switch,View,StyleSheet,Button ,ScrollView,KeyboardAvoidingView} from 'react-native';
import Icon from '../component/Icon';
import DateTimePicker from '@react-native-community/datetimepicker';
import NumericInput from 'react-native-numeric-input'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppInputText from '../component/AppInputText';

const Stack = createNativeStackNavigator();


function GuestEntry({navigation,route}) {
    // const [fromdate, setFromdate] = useState(new Date());
    // const [todate, setTodate] = useState(new Date());
    // const [mode, setMode] = useState('date');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   // const [isSelected, setSelection] = useState(false);
    // const ontoChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setTodate(currentDate);
    //     };
    // const onfromChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setFromdate(currentDate);
    //     };

        const RoomName= route.params;

  
    return (
       
            <KeyboardAvoidingView style={styles.Container}  keyboardVerticalOffset={100} behavior={'padding'}>
               
            <ScrollView style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={styles.HeaderText}> {RoomName}</Text>
                </View>
                    <View style={styles.Body}>
                    {/* <View style={styles.timeEntry}>
                    <View style={styles.FormElement} >
        
                    
            
                    </View>
                    <View style={styles.FormElement} >
        
                        
                    </View>
                    </View> */}
                

                            <View style={styles.FormElement} >
            
                                
                                <View style={styles.GuestEntry} >
                                    <Text style={{fontWeight:'bold',fontSize:18}}>
                                    Number of Guest
                                    </Text>
                                    <NumericInput minValue={1} 
                                        totalWidth={180} 
                                        totalHeight={40} 
                                        rounded 
                                        textColor='#000' 
                                        iconStyle={{ color: '#fff' }} 
                                        rightButtonBackgroundColor='#6a5acd' 
                                        leftButtonBackgroundColor='#6a5acd'
                                        onChange={value => console.log(value)} />    
                                </View>
                    
                                <AppInputText  icon='account-star-outline'
                                placeholder="Guest Full Name"
                                color='#6a5acd'
                                />
                                <AppInputText  icon='shield-account'
                                placeholder="Designation"
                                color='#6a5acd'
                                />
                        
                                <AppInputText  icon='bank'
                                placeholder=" Address"/>

                                <AppInputText  icon='phone'
                                placeholder="Phone no."
                                returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                                keyboardType={'phone-pad'}
                                />         
                            
                                <AppInputText  icon='arrow-decision-outline'
                                placeholder=" Reference "/> 
                                
                                <View style={styles.support}>
                                    <Text style={{fontSize:15,fontWeight:'bold',padding:10}}> Vehical Support </Text>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}/> 

                                </View>
                                <View style={styles.Vehical} >
                                <Icon name={"car"} backgroundColor={'#a3d9c9'} iconColor={'#6a5acd'} size={65}/>
                                    
                                    <NumericInput minValue={1} 
                                   
                                    totalWidth={130} 
                                    totalHeight={40} 
                                    rounded 
                                    textColor='#000' 
                                    iconStyle={{ color: '#fff' }} 
                                    rightButtonBackgroundColor='#6a5acd' 
                                    leftButtonBackgroundColor='#6a5acd'
                                    onChange={value => console.log(value)} />    
                                </View>

                                
                        
                            </View>
                
               
               
                        <View style={styles.Footer}>
                        <Button 
                            title="Book This Room"
                            color="#fff"
                            onPress={() => navigation.navigate('Booking')}
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
        support:{
            flexDirection:'row',
            justifyContent:'space-around'
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
            margin:25
            


        },
        Vehical:{
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            padding:10
           

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
            fontSize:20,

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


export default GuestEntry;