import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './app/screens/HomePage';
import RoomStatus from './app/screens/RoomStatus';
import RoomDetails from './app/screens/RoomDetails';
import GuestEntry from './app/screens/GuestEntry';
import RoomRecord from './app/screens/RoomRecord';
import CheckOut from './app/screens/CheckOut';
import RoomCard from './app/component/RoomCard';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DateTime from './app/screens/DateTime';
import CreateRoom from './app/screens/CreateRoom';
import RoomBooking from './app/screens/RoomBooking';
import TestCalender from './app/screens/TestCalender';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Panchagarh" component={HomePage} />
        <Stack.Screen name="Status" component={RoomStatus}/>
        <Stack.Screen name="Details" component={RoomDetails} />
        <Stack.Screen name="Entry" component={GuestEntry}/>
        <Stack.Screen name="Record" component={RoomRecord}/>
        <Stack.Screen name="CheckOut" component={CheckOut}/>
        <Stack.Screen name="card" component={RoomCard}/>
        <Stack.Screen name="Date" component={DateTime}/>
        <Stack.Screen name="Room" component={CreateRoom}/>
        <Stack.Screen name="Booking" component={RoomBooking}/>
        <Stack.Screen name="Test" component={TestCalender}/>
       
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

