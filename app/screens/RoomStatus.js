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
           <View style={styles.Body}>

               <View style={styles.vipSection}>
                   <Text>VIP section</Text>
                   <View style={styles.vipCard}>
                    <View style={styles.cardElement}>
                        <Text> Room1  </Text>
                        <Text>AC  |  Single </Text>

                    </View>
                    <View style={styles.cardElement}>
                        <Text> Room1  </Text>
                        <Text>AC  |  Single </Text>

                    </View>
                    <View style={styles.cardElement}>
                        <Text> Room3  </Text>
                        <Text>AC  |  Single </Text>

                    </View>
                   </View>
                </View>
                <View style={styles.nonvipSection}>
                   <Text>Non VIP</Text>
                   <View style={styles.vipCard}>
                   <Text>VIP section</Text>
                   <Text>VIP section</Text>
                   </View>
                </View>
                <View style={styles.hallSection}>
                   <Text>Confarence</Text>
                   <View style={styles.vipCard}>
                   <Text>VIP section</Text>
                   <Text>VIP section</Text>
                   </View>
                </View>

           </View>
           

         
           <View style={styles.Footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Entry')}>
                    <Text style={styles.FooterText} >
                        Book A Room 
                    </Text>
                    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text style={styles.roomText}>AC1 single</Text>
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
        flex: .15,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center'

    },
    Body:{
        flex: .60,
        backgroundColor: '#6a5acd',
        justifyContent:'center',
        alignItems:'center'

    },
    vipSection:{
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-start',
        
    },
    vipCard:{
        flexDirection:'row'

    },
    nonvipSection:{
        flex: 1,
    },
    hallSection:{
        flex: 1,

    },
    cardElement:{

        backgroundColor:'#EC33FF',
        borderRadius:30,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
        width: 120
    },
    
    Footer:{

        flex: .25,
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