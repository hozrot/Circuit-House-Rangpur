import React from 'react';
import { View ,Text,Button,StyleSheet, TouchableOpacity,onPress} from 'react-native';

function RoomStatus({navigation}) {
    return (
        <View style={styles.Container}>
           <View style={styles.Header}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>
                Room Structure changed 
            </Text>
           </View>
           

         
           <View style={styles.Footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Entry')}>
                    <Text style={styles.FooterText} >
                        Book A Room 
                    </Text>
                    
                </TouchableOpacity> 
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
        flex: .20,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center'

    },
    Body:{
        flex: 1,
        backgroundColor: '#6a5acd'

    },
    firstFloor:{
        flex: 1.5,
        backgroundColor: '#7cd9b4',
        justifyContent:'center',
        alignItems:'center',
        

    },
    
        

    
    roomText:{
        fontSize:25,
        padding:10,
        // color:'#f36374',
        color:'#0f420a',
        fontWeight:'bold'
        
        

    },
    secondFloor:{
        flex: 1,
        backgroundColor: '#9ad88e',
        justifyContent:'center',
        alignItems:'center',

    },
    Footer:{

        flex: .15,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center'
    },
   
    FooterText:{
       fontSize: 30,
       fontWeight:'bold'
        
      
    },
    
})

export default RoomStatus;