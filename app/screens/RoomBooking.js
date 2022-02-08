import React,{ useState } from 'react';
import { Text,Switch,View,StyleSheet,Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppInputText from '../component/AppInputText';

function RoomBooking({navigation}) {

    const [fromdate, setFromdate] = useState(new Date());
    const [todate, setTodate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const ontoChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setTodate(currentDate);
        };
    const onfromChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setFromdate(currentDate);
        };

    return (
        <View style={styles.Container}>

            <View style={styles.DateTime}>
                <View style={styles.FromDateTime} >
                    <Text style={styles.BodyText}>  From: </Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={fromdate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onfromChange}/>
                        
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={fromdate}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={onfromChange}
                        />
                </View>
                <View style={styles.ToDateTime} >
                    <Text style={styles.BodyText}>  To :  </Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={todate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={ontoChange} />
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={todate}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={ontoChange}/>
                </View>
            </View>

            <View style={styles.FormData}>
                        <AppInputText  icon='account-star-outline'
                        placeholder="Guest ID (Auto)"
                        color='#6a5acd'
                        />
                   
                        <AppInputText  icon='bank'
                        placeholder="Room ID  (Auto)"/>
                        <AppInputText  icon='check'
                        placeholder="Status (pending/confirm)"/>
                        
            </View>
            <View style={styles.Footer}>
            <Button 
                        title="Confirm Booking"
                        color="#fff"
                        onPress={() => navigation.navigate('Status')}
                        />

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        padding:20
    },
    DateTime:{
        flex:.25,
        flexDirection:'row'

    },
    FormData:{
        flex:.50
    },
    Footer:{
        flex:0.08,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#6a5acd',
        margin: 30,
        borderRadius:30

    }, 
    BodyText:{
        fontWeight:'bold',
        fontSize:20,

        textAlign:'center'    
    }, 
    
    
    FromDateTime:{
        
        flex:1,
        

    },
    ToDateTime:{
        
        flex:1,

    },
    


})
export default RoomBooking;