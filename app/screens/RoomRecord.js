import React from 'react';
import { Text, View ,StyleSheet,Image,ScrollView} from 'react-native';
import {RoomCard } from '../component/RoomCard'
function RoomRecord(props) {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}> Room Name </Text>
            </View>
            
            <View style={styles.imageBox} >
        
                <Image  style={styles.image}
                        source={require('../assets/VIP.jpg')}/>
        
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

})

export default RoomRecord;