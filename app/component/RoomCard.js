import React from 'react';

function RoomCard(props) {
    return (
        <TouchableOpacity style={styles.cardElement}>
        <View style={styles.cardHeader}>
            <Text> Room 1  </Text> 
        </View>
        <View style={styles.roomConfig}>
        <Text >AC  </Text>
        <Text>Single </Text>
        </View>
      

    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    cardHeader:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#7CFC00',
        height:'30%',
        flex:.30


    },
    cardElement:{

        backgroundColor:'#50C878',
        borderRadius:5,
        margin:5,
        overflow:'hidden',
        width: 80
    },
    roomConfig:{
        
        justifyContent:'flex-end',
        alignItems:'center',
        flex: .75

    },
})

export default RoomCard;