import React from 'react';
import { View ,Text,Button,StyleSheet, TouchableOpacity,onPress} from 'react-native';

function RoomStatus({navigation}) {
    return (
        <View style={styles.Container}>
           <View style={styles.Header}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>
                Room Structure
            </Text>
           </View>
           <View style={styles.Body}>
               <View  style={styles.firstFloor}>
               <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text style={styles.roomText}>AC1 single</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>AC2 single</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>AC3 Double</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>AC4 Double</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>N1 Double</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}> VIP </Text>
                </TouchableOpacity>

               </View>
               <View  style={styles.secondFloor}>
               <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>N2 single</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>N3 single</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>N4 Double</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.roomText}>N5 Double</Text>
                </TouchableOpacity>
                

               </View>

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