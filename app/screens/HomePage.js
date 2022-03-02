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
    var myloop = [];
    
    var d = new Date("1/3/2022");
     
    
    for (let i = 1; i < 32; i++) {
        var day =d.setDate(d.getDate()+ 1);
        var dayName = d.toString().split(' ')[0];
      myloop.push(
        <View >
            <View style={styles.BoxColumn}>
            <Text>{dayName}</Text>
        <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25}}>{i}</Text>
        </View>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fstRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',sndRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',trdRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',frtRoom)}/>
            <TouchableOpacity style={styles.BoxColumn} onPress={() => navigation.navigate('Entry',fifRoom)}/>
        
        </View>
      );
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
            
                {myloop} 
        

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
    date:{
        flexDirection:'row',
        flex:1
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