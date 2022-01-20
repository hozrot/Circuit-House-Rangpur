import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RoomEntry({props}) {
    return (

        
       <View>
           <Text style={{fontSize:40}}>
               An Entry form will be there 
           </Text>
       </View>

       
    );

}

export default RoomEntry;