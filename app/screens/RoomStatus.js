import React from 'react';
import { View ,Text,Button,StyleSheet, TouchableOpacity,onPress, ScrollView} from 'react-native';
import RoomCard from '../component/RoomCard';
import AppButton from '../component/AppButton';


function RoomStatus({navigation}) {
    return (
        <View style={styles.Container}>
           <View style={styles.Header}>
                <Text style={{fontSize: 20, fontWeight: '800',paddingBottom:15}}>
                    Avaiable Accomodation  
                </Text>
           </View>
           <View style={styles.Body}>

               <View style={styles.vipSection}>
                   
                   <Text style={{fontWeight:'600', fontStyle:'italic',fontSize:20,paddingLeft:15}}>VIP Rooms : </Text>
                   <ScrollView horizontal>
                        <View style={styles.CardSection}>
                                
                                            <RoomCard RoomName={'Room 1'}
                                                    AcConfig={"AC"}
                                                    CapasityConfig={'Double'}/>
                                
                                            <RoomCard RoomName={'Room 2'}
                                                    AcConfig={" AC"}
                                                    CapasityConfig={'Single'}/>
                               
                                            <RoomCard 
                                                RoomName={'Room 3'}
                                                AcConfig={"AC"}
                                                CapasityConfig={'Single'}/>
                           
                                
                                
                        </View>
                   </ScrollView>
                </View>
                <View style={styles.nonvipSection}>
                   
                   <Text style={{fontWeight:'600', fontStyle:'italic',fontSize:20,paddingLeft:15}}>Non VIP Rooms : </Text>
                   <ScrollView horizontal>
                        <View style={styles.CardSection}>
                                
                                            <RoomCard RoomName={'Room 21'}
                                                    AcConfig={"Non AC"}
                                                    CapasityConfig={'Double1'}
                                                    onPress={() => navigation.navigate('Details')}/>
                               
                                            <RoomCard RoomName={'Room 22'}
                                                    AcConfig={"Non AC"}
                                                    CapasityConfig={'Double'}/>
                                
                                            <RoomCard RoomName={'Room 23'}
                                                    AcConfig={"Non AC"}
                                                    CapasityConfig={'Double'}/>
                                
                                            <RoomCard RoomName={'Room 24'}
                                                    AcConfig={"Non AC"}
                                                    CapasityConfig={'Double'}/>
                               
                               
                                            <RoomCard RoomName={'Room 25'}
                                                    AcConfig={"Non AC"}
                                                    CapasityConfig={'Double'}/>
                                
                                            <RoomCard RoomName={'Room 26'}
                                                    AcConfig={"Non AC"}
                                                    CapasityConfig={'Double'}/>
                               
                                
                        </View>
                   </ScrollView>
                </View>
                <View style={styles.hallSection}>
                   
                   <Text style={{fontWeight:'600', fontStyle:'italic',fontSize:20}}>Confarence Rooms : </Text>
                   <ScrollView horizontal>
                        
                               
                                            <RoomCard RoomName={' Room 10 '}
                                                    AcConfig={"Non AC"}
                                                    CapasityConfig={'Hall'}/>
                                                     <RoomCard RoomName={'Room 11 '}
                                                    AcConfig={"AC"}
                                                    CapasityConfig={'Hall'}/>
                               
                                            
                              
                               
                                
                        
                   </ScrollView>
                </View>

           </View>
                   
           <View style={styles.Footer}>
                    <AppButton ButtonName={"Book A Room"}  onPress={() => navigation.navigate('Entry')}/>
           </View>
       </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#a3d9c9'

    },
    cardHeader:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#7CFC00',// red #D22B2B 
        height:'30%',
        flex:.30


    },
    
    Header:{
        flex: .05,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center'

    },
    Body:{
        flex: 0.80,
       
        justifyContent:'center',
        alignItems:'center'

    },
    Footer:{

        flex: .15,
        
        justifyContent:'center',
        alignItems:'center',
        
    },
    
    vipSection:{
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-start',
        
        
    },
    CardSection:{
        flexDirection:'row',
        height:'100%',
        left:10,
        right:10,
    },
    nonvipSection:{
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    hallSection:{
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-start',

    },
    cardElement:{

        backgroundColor:'#50C878',
        borderRadius:5,
        margin:5,
        overflow:'hidden',
        width: 80,
        paddingBottom:5
    },
    
    
   
   
    
})

export default RoomStatus;