import React ,{useState} from 'react';
import { Text, View,StyleSheet,Image, ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


function RoomDetails({navigation,route}) {

    const RoomName= route.params;


    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}> {RoomName.name} </Text>
            </View>
            
            <View style={styles.imageBox} >
        
            <Image  style={styles.image}
                source={RoomName.image}/>

        
            </View>
            <View style={styles.config}>
                <View style={styles.configDetails}>
                <Text style={{ fontSize:15,fontStyle:'italic',fontWeight:'bold'}}> Category </Text>
                <Text  style={{fontWeight:'500',marginTop:5}}> VIP  </Text>
                </View>

                <View style={styles.configDetails}>
                <Text style={{ fontSize:15,fontStyle:'italic',fontWeight:'bold'}}> Air Condition </Text>
                <Text style={{fontWeight:'500',marginTop:5}}> Yes </Text>
                </View>

                <View style={styles.configDetails}>
                <Text style={{ fontSize:15,fontStyle:'italic',fontWeight:'bold'}}> Capacity </Text>
                <Text style={{fontWeight:'500',marginTop:5}}> 01  </Text>
                </View>
                


                
            </View>
            <View style={styles.furniture}>
                <Text style={{ fontSize:20,fontStyle:'italic',fontWeight:'bold',paddingLeft:15,top:5}}> Furniture </Text>
                <View style={styles.furnitureDetails}>
                     <View style={styles.furnitureElement}>
                        <Text> Bed </Text>
                        <Text> 01 </Text>
                    </View>
                    <View style={styles.furnitureElement}>
                        <Text> Table </Text>
                        <Text> 01 </Text>
                    </View>
                    <View style={styles.furnitureElement}>
                        <Text> TV </Text>
                        <Text> 01 </Text>
                    </View>
                    <View style={styles.furnitureElement}>
                        <Text> Sofa </Text>
                        <Text> 01 </Text>
                    </View>
                </View>

                
            </View>
            <View style={styles.costing}>
            <Text style={{ fontSize:20,
                fontStyle:'italic',
                fontWeight:'bold',
                paddingLeft:15,
                top:5}}> Costing Details</Text>

                

                
            </View>
       



        

        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        
    },
    Header:{
        flex: .05,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center'
    },
    HeaderText:{

        fontWeight:'800',
        fontSize:25
    },
    imageBox:{
        flex: 0.35

    },
    image:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor:'#a3d9c9',
       
        
    },
    config:{
        flex: .10,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        
    },
    configDetails:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        
        height:'100%',
        margin:5

    },
    furniture:{
        flex: .15,
        backgroundColor:'#a3d9c9'
        
        
    },
    furnitureDetails:{
        flexDirection:'row'

    },
    furnitureElement:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        

    },
    costing:{
        flex: .45,
        backgroundColor: '#a3d9c9',
        
    },
    
    
})

export default RoomDetails;
 
