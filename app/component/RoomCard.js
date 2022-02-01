import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from '../component/Icon';
function RoomCard({RoomName,AcConfig,CapasityConfig,onPress}) {
    return (
        <TouchableOpacity style={styles.Container} onPress={onPress}>
            <View style={styles.cardHeader}>
                <Text> {RoomName}  </Text> 
            </View>
            <View style={styles.roomConfig}>
            <Icon name={"home"} backgroundColor={'#D22B2B'} iconColor={'#fff'} size={45}/>
                <Text >{AcConfig}  </Text>
                <Text>{CapasityConfig} </Text>
            </View>
    

    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        borderRadius:5,
        margin:5,
        overflow:'hidden',
        width: 80,
        

    },
    cardHeader:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#7CFC00',
        height:'30%',
        flex:.25


    },
    
    roomConfig:{
        
        justifyContent:'flex-end',
        alignItems:'center',
        flex: .75,
        backgroundColor:'#50C878',
        paddingBottom:10

    },
})

export default RoomCard;