import React from 'react';
import { View ,Text,Button,StyleSheet, TouchableOpacity,onPress, ScrollView} from 'react-native';

function RoomStatus({navigation}) {
    return (
        <View style={styles.Container}>
           <View style={styles.Header}>
            <Text style={{fontSize: 20, fontWeight: '800'}}>
                Avaiable Accomodation  
            </Text>
           </View>
           <View style={styles.Body}>

               <View style={styles.vipSection}>
                   
                   <Text style={{fontWeight:'600', fontStyle:'italic',fontSize:20,paddingLeft:15}}>VIP Rooms : </Text>
                   <ScrollView horizontal>
                   <View style={styles.vipCard}>
                    <TouchableOpacity style={styles.cardElement}
                    onPress={() => navigation.navigate('Details')}>
                        <View style={styles.cardHeader}>
                            <Text> Room 1  </Text> 
                        </View>
                        <View style={styles.roomConfig}>
                        <Text >AC  </Text>
                        <Text>Single </Text>
                        </View>
                      

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardElement}
                    onPress={() => navigation.navigate('Details')}>
                        <View style={styles.cardHeader2}>
                            <Text> Room 2  </Text> 
                        </View>
                        <View style={styles.roomConfig}>
                        <Text >AC  </Text>
                        <Text>Single </Text>
                        </View>
                      

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardElement}
                    onPress={() => navigation.navigate('Details')}>
                        <View style={styles.cardHeader}>
                            <Text> Room 3 </Text> 
                        </View>
                        <View style={styles.roomConfig}>
                        <Text > AC  </Text>
                        <Text> Double </Text>
                        </View>
                      

                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.cardElement}
                    onPress={() => navigation.navigate('Details')}>
                        <View style={styles.cardHeader}>
                            <Text> Room 4  </Text> 
                        </View>
                        <View style={styles.roomConfig}>
                        <Text > Non AC  </Text>
                        <Text> Single </Text>
                        </View>
                      

                    </TouchableOpacity> */}
                   </View>
                   </ScrollView>
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
    cardHeader:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#7CFC00',// red #D22B2B 
        height:'30%',
        flex:.30


    },
    cardHeader2:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#D22B2B',// red #D22B2B 
        height:'30%',
        flex:.30


    },
    Header:{
        flex: .10,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center'

    },
    Body:{
        flex: .60,
       
        justifyContent:'center',
        alignItems:'center'

    },
    
    roomConfig:{
        
        justifyContent:'flex-end',
        alignItems:'center',
        flex: .75

    },
    vipSection:{
        flex: 1,
        justifyContent:'center',
        alignItems:'flex-start',
        
        
        
    },
    vipCard:{
        flexDirection:'row',
        height:'80%',
        left:10,
        right:10,
        
        

    },
    nonvipSection:{
        flex: 1,
    },
    hallSection:{
        flex: 1,

    },
    cardElement:{

        backgroundColor:'#50C878',
        borderRadius:5,
        margin:5,
        overflow:'hidden',
        width: 80,
        paddingBottom:5
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