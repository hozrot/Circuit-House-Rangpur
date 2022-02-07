import React,{useState} from 'react';
import { Text, View,StyleSheet,Button,onChangeText} from 'react-native';
import AppInputText from '../component/AppInputText';
import NumericInput from 'react-native-numeric-input';

import AppButton from '../component/AppButton';
import { addSingleRoom } from '../controller/roomController';
import createData from '../Services/create';
import showToast from '../Services/toast';

function CreateRoom({navigation}) {

    const [name,setName]= useState("")
    const [category,setCategory]= useState("")
    const [ac,setAc]= useState("")
    const [numofbed,setNumofbed]= useState("")
    const [bed,setBed]= useState("")
    const [capasity,setCapasity]= useState("")

    function addRoom(){
        var room={
            "name": name,
            "category": category,
            "ac":ac,
            "numofbed":numofbed,
            "bed":bed,
            "capasity": capasity
        }
        addSingleRoom(room,addComplete)
    }

    function addComplete(){
        navigation.navigate('status')
    }

    return (
        // state ={
        //     roomname:'',
        //     roomcategory:'',
        //     aircondition:'',
        //     bedcategory:'',
        //     bedno:'',
        //     capasity:'',
        // },

        <View style={styles.Body}>
            <View style={styles.FormElement} >

                <Text style={styles.BodyText}> Room  Details : </Text>
                <AppInputText  icon='home'
                placeholder="Room Name"
                
                onChangeText={text=> setName(text)}/>
                <AppInputText  icon='home'
                placeholder="Room Category"
               
                onChangeText={text=> setCategory(text)}/>     
                <AppInputText  icon='home'
                placeholder="Aircondition "
               
                onChangeText={text=> setAc(text)}/>
                <AppInputText  icon='home'
                placeholder="Bed Category "
                
                onChangeText={text=> setBed(text)}/> 
                <View style={{flexDirection:'row',margin:10,padding:10}}>
                    <View style={{padding:10}}>
                        <Text> Number of Bed: </Text>
                        <NumericInput minValue={1} onChange={value => console.log(value)} 
                        
                        onChangeText={text=> setNumofbed(text)}/>    
                    </View>
                    <View style={{padding:10}} >
                        <Text> Capasity </Text>
                        <NumericInput minValue={1} onChange={value => console.log(value)}
                       
                        onChangeText={text=> setCapasity(text)} />    
                    </View>
                </View>  
        
            </View>

            <View style={styles.Footer}>
                <AppButton
                    ButtonName="Add Room"
                    color="#000"
                    onPress={() => addRoom()}
                    />
            </View>

           


        </View>
    );

        }

const styles = StyleSheet.create({
    Body:{
        flex: 1

    },
    FormElement:{
        flex: 0.80

    },
    Footer:{
        flex: 0.20

    },
    BodyText:{
        fontWeight:'bold',
        fontSize:20,

        textAlign:'center'    
    },



    
})
export default CreateRoom;