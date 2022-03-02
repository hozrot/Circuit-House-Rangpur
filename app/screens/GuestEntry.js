import React ,{ useState } from 'react';
import { Text,Switch,View,StyleSheet,Button ,ScrollView,KeyboardAvoidingView} from 'react-native';
import Icon from '../component/Icon';
import DateTimePicker from '@react-native-community/datetimepicker';
import NumericInput from 'react-native-numeric-input'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppInputText from '../component/AppInputText';
import { addSingleGuest } from '../controller/guestController';

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

        const RoomName = route.params;
        

        const [guestname,setGuestname]= useState("")
        const [designation,setDesignation]= useState("")
        const [address,setAddress]= useState("")
        const [phoneno,setPhone] =useState("")
        const [reference,setReference]=useState("")
        const [vehicalsupport,setVehicalsupport]= useState("")
        const [numberofvehical,setNumberofvehical]= useState("")
        const [numberofguest,setNumberofguest] =useState("")

        function addGuest(){
            var singleGuest={
                "guestname": guestname,
                "designation": designation,
                "address":address,
                "phoneno": phoneno,
                "reference": reference,
                "vehicalsupport":vehicalsupport,
                "numberofvehical": numberofvehical,
                "numberofguest":numberofguest,
                
            }
            addSingleGuest(singleGuest,addComplete)
        }
        function addComplete(){
            navigation.navigate('Booking');
        }

        
        
    return (
       
            <KeyboardAvoidingView style={styles.Container}  keyboardVerticalOffset={100} behavior={'padding'}>
               
            <ScrollView style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={styles.HeaderText}> {RoomName}</Text>
                   
                    
                </View>
                    <View style={styles.Body}>
                
                         <View style={styles.FormElement} >                              
                                {/* <View style={styles.GuestEntry} >
                                    <Text style={{fontWeight:'bold',fontSize:16,paddingRight:45}}>
                                    Number of Guest   
                                    </Text>
                                    <NumericInput minValue={1} 
                                        totalWidth={160} 
                                        totalHeight={45} 
                                        rounded 
                                        textColor='#000' 
                                        iconStyle={{ color: '#000' }} 
                                        rightButtonBackgroundColor='#9BC76E' 
                                        leftButtonBackgroundColor='#9BC76E'
                                        
                                        onChange={text=> setNumberofguest(text)} />    
                                </View> */}
                    
                                <AppInputText  icon='account-star-outline'
                                placeholder="Guest Full Name"
                                color='#C8C4BD'
                                onChangeText={text=> setGuestname(text)}
                                />
                                <AppInputText  icon='shield-account'
                                placeholder="Designation"
                                color='#6a5acd'
                                onChangeText={text=> setDesignation(text)}
                                />
                        
                                <AppInputText  icon='bank'
                                placeholder=" Address"
                                onChangeText={text=> setAddress(text)}/>

                                <AppInputText  icon='phone'
                                placeholder="Phone no."
                                returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
                                keyboardType={'phone-pad'}
                                onChange={text=> setPhone(text)}
                                />         
                            
                                <AppInputText  icon='arrow-decision-outline'
                                placeholder=" Reference "
                                onChangeText={text=> setReference(text)}/> 
                                
                                <View style={styles.support}> 
                                <View style={styles.supportText}>
                                <AppInputText  icon='car'
                                value={isEnabled ? "Yes" : "No"}
                                onChange={text=> setVehicalsupport(text)}/> 
                                </View>
                                <View style={styles.supportSwitch}>
                                <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                       /> 
                                </View>
                                
                               
                                </View>
                                
                                
                               {isEnabled ?
                                <View style={styles.Vehical} >
                                 <Icon name={"car"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={55}/>
                                    
                                    <NumericInput minValue={0} 
                                   
                                    totalWidth={130} 
                                    totalHeight={50} 
                                    rounded 
                                    textColor='#000' 
                                    iconStyle={{ color: '#fff' }} 
                                    rightButtonBackgroundColor='#9BC76E' 
                                    leftButtonBackgroundColor='#9BC76E'
                                    onChange={text=> setNumberofvehical(text)} />    
                                </View> : null}

                                {/* <View> 
                                    <Text style={{fontWeight:'bold', paddingTop:15}}> Do you want to select another room for this Guest </Text>
                                </View> */}
                        
                            </View>
                
               
               
                        <View style={styles.Footer}>
                        <Button 
                            title="Save"
                            color="#fff"
                            onPress={() => addGuest()}
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
            backgroundColor: '#F0EEF4',
            
        },
        timeEntry:{
            flexDirection:'row'

        },
        support:{
            flex:1,
            flexDirection:'row',
            
        },
        supportText:{
            flex:.80

        },
        supportSwitch:{
            flex:.20,
            paddingTop:8
        },
        Header:{
            
            backgroundColor: '#F0EEF4',
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
            backgroundColor: '#fff',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:25,
            flexDirection:'row',
            marginVertical:3,
            
            


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
            margin: 0,
            marginTop:30
    
        }, 
    
    })


export default GuestEntry;