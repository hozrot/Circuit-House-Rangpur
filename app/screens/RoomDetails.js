import React ,{useState} from 'react';
import { Text, View,StyleSheet,Image, ScrollView,Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from '../component/Icon';

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
                <Text style={{ fontSize:18,fontStyle:'italic',fontWeight:'bold'}}> Category </Text>
                <Text  style={{fontWeight:'500',marginTop:5}}> VIP  </Text>
                </View>

                <View style={styles.configDetails}>
                <Text style={{ fontSize:16,fontStyle:'italic',fontWeight:'bold'}}> Air Condition </Text>
                <Text style={{fontWeight:'500',marginTop:5}}> Yes </Text>
                </View>

                <View style={styles.configDetails}>
                <Text style={{ fontSize:18,fontStyle:'italic',fontWeight:'bold'}}> Capacity </Text>
                <Text style={{fontWeight:'500',marginTop:5}}> {RoomName.capacity}  </Text>
                </View>
                


                
            </View>
            <View style={styles.furniture}>
                <Text style={{ fontSize:20,fontStyle:'italic',fontWeight:'bold',paddingLeft:15,top:5}}> Furniture </Text>
                <View style={styles.furnitureDetails}>
                     <View style={styles.furnitureElement}>
                     <Icon name={"bed"} backgroundColor={'#50C878'} iconColor={'#6a5acd'} size={45}/> 
                        
                        <Text> 01 </Text>
                    </View>
                    <View style={styles.furnitureElement}>
                    <Icon name={"table-furniture"} backgroundColor={'#50C878'} iconColor={'#6a5acd'} size={45}/> 
                        <Text> 01 </Text>
                    </View>
                    <View style={styles.furnitureElement}>
                    <Icon name={"television"} backgroundColor={'#50C878'} iconColor={'#6a5acd'} size={45}/> 
                        <Text> 01 </Text>
                    </View>
                    <View style={styles.furnitureElement}>
                    <Icon name={"sofa"} backgroundColor={'#50C878'} iconColor={'#6a5acd'} size={45}/> 
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

            
               <View style={styles.FooterContent}> 
               
                    <Button 
                        title="Book Now"
                        color="#fff"
                        onPress={() => navigation.navigate('Entry',RoomName.name)}
                        />  
                </View>
       



        

        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#a3d9c9',
        
    },
    Header:{
        flex: .08,
        backgroundColor: '#a3d9c9',
        justifyContent:'center',
        alignItems:'center'
    },
    HeaderText:{

        fontWeight:'800',
        fontSize:25
    },
    imageBox:{
        flex: 0.55

    },
    image:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor:'#a3d9c9',
       
        
    },
    config:{
        flex: .20,
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
        flex: .25,
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
    FooterContent:{
        margin:20,
        backgroundColor: '#6a5acd',
        borderRadius:20

        
    }
    
    
    
})

export default RoomDetails;
 
