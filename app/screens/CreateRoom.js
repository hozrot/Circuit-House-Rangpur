import React,{useState} from 'react';
import { Text, View,StyleSheet,Button,onChangeText} from 'react-native';
import AppInputText from '../component/AppInputText';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown'
import AppButton from '../component/AppButton';
import { addSingleRoom } from '../controller/roomController';
import createData from '../Services/create';
import showToast from '../Services/toast';

function CreateRoom({navigation,route}) {
    const RoomName= route.params;

    const [name,setName]= useState("")
    const [category,setCategory]= useState("")
    const [ac,setAc]= useState("")
    const [numofbed,setNumofbed]= useState("")
    const [bed,setBed]= useState("")
    const [capasity,setCapasity]= useState("")


    const roomcategory = ["VIP", "Normal", "Confarence"]
    const bedcategory = ["Single", "Double"]
    const acstatus = ["Yes", "No"]

    function addRoom(){
        var singleRoom={
            "name": name,
            "category": category,
            "ac":ac,
            "numofbed":numofbed,
            "bed":bed,
            "capasity": capasity
        }
        addSingleRoom(singleRoom,addComplete)
    }

    function addComplete(){
        navigation.navigate('Status');
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
                placeholder={RoomName}
                onChangeText={text=> setName(text)}/>
                {/* <AppInputText  icon='home'
                placeholder="Room Category"
                
                onChangeText={text=> setCategory(text)}/>     
                <AppInputText  icon='home'
                placeholder="Aircondition "
                
                onChangeText={text=> setAc(text)}/>
                <AppInputText  icon='home'
                placeholder="Bed Category "
                
                onChangeText={text=> setBed(text)}/>  */}
                <View style={{flexDirection:'row'}}>
                    <View style={{padding:10}}>
                        <Text> Number of Bed: </Text>
                        <NumericInput minValue={1} onChange={text=> setNumofbed(text)}
                        
                        />    
                    </View>
                    <View style={{padding:10}} >
                        <Text> Capasity </Text>
                        <NumericInput minValue={1} onChange={text=> setCapasity(text)} 
                     />    
                    </View>
                </View>  
        
            </View>

            <View style={styles.Footer}>
            <AppButton
                    ButtonName="Change Room config."
                    color="#000"
                    onPress={()=>navigation.navigate('Panchagarh')}
                    />
                {/* <AppButton
                    ButtonName="Add Room"
                    color="#000"
                    onPress={()=>addRoom()}
                    /> */}

                    {/* <SelectDropdown
                        data={roomcategory}
                        defaultButtonText={"Select Room Category"}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.
                            //property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.
                            //property to represent item in dropdown
                            return item
                        }}
                    /> */}
            </View>

           


        </View>
    );

        }

const styles = StyleSheet.create({
    Body:{
        flex: 1

    },
    FormElement:{
        flex: 0.80,
        justifyContent:'center',
        padding:20

    },
    Footer:{
        flex: 0.20,

    },
    BodyText:{
        fontWeight:'bold',
        fontSize:20,

        textAlign:'center'    
    },



    
})
export default CreateRoom;