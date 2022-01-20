import React from 'react';
import { Text, View,StyleSheet,Button } from 'react-native';

function RoomDetails({navigation}) {
    return (
        <View style={styles.Container}>
        <View style={styles.Header}>
            <Text style={styles.HeaderText}>  Air Condition Single Room  {"\n"}   Details </Text>
        </View>
        <View style={styles.Body}>

            <Text style={styles.BodyText}>
                Guest Name: 
            </Text>
            <Text style={styles.BodyText}>
                Phone No. : 
            </Text>
            <Text style={styles.BodyText}>
                Office Address:  
            </Text>
            <Text style={styles.BodyText}>
                Personal Address:
            </Text>
            <Text style={styles.BodyText}>
                Reference No. : 
            </Text>
            <Text style={styles.BodyText}>
                Entry Date:  
            </Text>
            </View>
            <View style={styles.Footer}>
               <View style={styles.Footer1}>
               <Button 
                 title="<< Check Out"
                 color="#000"
                 onPress={() => navigation.navigate('CheckOut')}
                />
                
               </View>
               <View style={styles.Footer2}>
               <Button style={{fontSize:30}}
                 title="Record  >> "
                 color="#000"
                 onPress={() => navigation.navigate('Record')}
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
    BodyText:{
        fontWeight:'bold',
        fontSize:25,
        padding:20,
       
        

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

export default RoomDetails;