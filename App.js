import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './app/screens/HomePage';
import RoomStatus from './app/screens/RoomStatus';
import RoomDetails from './app/screens/RoomDetails';
import RoomEntry from './app/screens/RoomEntry';
import RoomRecord from './app/screens/RoomRecord';
import CheckOut from './app/screens/CheckOut';
import RoomCard from './app/component/RoomCard';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Status" component={RoomStatus}/>
        <Stack.Screen name="Details" component={RoomDetails} />
        <Stack.Screen name="Entry" component={RoomEntry}/>
        <Stack.Screen name="Record" component={RoomRecord}/>
        <Stack.Screen name="CheckOut" component={CheckOut}/>
        <Stack.Screen name="card" component={RoomCard}/>
       
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

