import React from 'react';
import { View ,StyleSheet,Text,ScrollView, TouchableOpacity} from 'react-native';
import Icon from '../component/Icon';



function HomePage( {navigation} ) {


    const fstRoom= "Room 1";
    const sndRoom= "Room 2";
    const trdRoom= "Room 3";
    const frtRoom= "Room 4";
    const fifRoom= "Room 5";
    const sixRoom= "Room 6";

   
    const datesBlacklistFunc = date => {
        return date.isoWeekday() === 5; // disable Saturdays
      }
    return (
        
        <View style={styles.Container}>
        <View style={styles.RoomColumn}>
        
                <View style={styles.RoomName}>
                  
                      <Text style={{alignSelf:'center'}}> Calender  </Text>
                      
                  
                </View>
                <TouchableOpacity style={styles.RoomName}
                onPress={() => navigation.navigate('Room',fstRoom)} >
                  
                      <Text style={{alignSelf:'center',fontWeight:'bold'}}>{fstRoom} </Text>
                      <View style={styles.RoomIcon}>
                      
                        <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                        <Text style={{fontSize:12}}>02</Text>
                        <Icon name={"human-male-male"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                      
                     </View>
                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.RoomName}
                onPress={() => navigation.navigate('Room',sndRoom)} >
                  
                      <Text style={{alignSelf:'center',fontWeight:'bold'}}>{sndRoom} </Text>
                      <View style={styles.RoomIcon}>
                      
                        <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                        <Text style={{fontSize:12}}>02</Text>
                        <Icon name={"human-male-male"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                      
                     </View>
                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.RoomName}
                onPress={() => navigation.navigate('Room',trdRoom)} >
                  
                      <Text style={{alignSelf:'center',fontWeight:'bold'}}>{trdRoom} </Text>
                      <View style={styles.RoomIcon}>
                      
                        <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                        <Text style={{fontSize:12}}>02</Text>
                        <Icon name={"human-male-male"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                      
                     </View>
                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.RoomName}
                onPress={() => navigation.navigate('Room',frtRoom)} >
                  
                      <Text style={{alignSelf:'center',fontWeight:'bold'}}>{frtRoom} </Text>
                      <View style={styles.RoomIcon}>
                      
                        <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                        <Text style={{fontSize:12}}>02</Text>
                        <Icon name={"human-male-male"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                      
                     </View>
                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.RoomName}
                onPress={() => navigation.navigate('Room',fifRoom)} >
                  
                      <Text style={{alignSelf:'center',fontWeight:'bold'}}>{fifRoom} </Text>
                      <View style={styles.RoomIcon}>
                      
                        <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                        <Text style={{fontSize:12}}>02</Text>
                        <Icon name={"human-male-male"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                      
                     </View>
                  
                </TouchableOpacity>
                
            
       
         
         </View> 
        <View style={styles.Calender}> 
        <ScrollView horizontal >
            <View >
            <View style={styles.BoxColumn}>
                <Text>Sat</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>23</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            
            
    

         
            
            

            </View>
            <View  >
            <View style={styles.BoxColumn}>
                <Text>Sun</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>24</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Mon</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>25</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            

            </View>
            <View>
            <View style={styles.BoxColumn}>
                <Text>Tue</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>26</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            </View>
            <View  >
            <View style={styles.BoxColumn}>
                <Text>Wed</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>27</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View>
            <View style={styles.BoxColumn}>
                <Text>Thu</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>28</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Fri</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>1</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Sat</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>2</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Sun</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>3</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Mon</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>4</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Tue</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>5</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Thr</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}} >6</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Fri</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>7</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Sat</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>8</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Sun</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>9</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Mon</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>10</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
            

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Tue</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>11</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>

            </View>
            <View >
            <View style={styles.BoxColumn}>
                <Text>Wed</Text>
                <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>12</Text>

            </View>
            <TouchableOpacity style={styles.BoxColumn}/>
            <TouchableOpacity style={styles.BoxColumn}/>
            <TouchableOpacity style={styles.BoxColumn}/>
            <TouchableOpacity style={styles.BoxColumn}/>
            <TouchableOpacity style={styles.BoxColumn}/>
            

            </View>
        
        

        </ScrollView>
        </View>


    </View>
    );
}

const styles = StyleSheet.create({

    Container:{
        flex:1,
        flexDirection:'row'

    },
    RoomColumn:{
        flex:.25,
        backgroundColor: '#fff',

    },
    RoomName:{
         
        height: 60, 
        borderWidth: .30,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#C5D3DA',

    },
    RoomIcon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        

    },
    
    Calender:{
        flex:.80,
        backgroundColor: '#fff',

    },
    BoxColumn:{
        width: 50, 
        height: 60, 
        borderWidth: .50,
        borderColor:'#C5D3DA',
        justifyContent:'center',
        alignItems:'center'

    },
    
    
})

export default HomePage;