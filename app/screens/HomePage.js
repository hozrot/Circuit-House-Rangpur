import React from 'react';
import { View ,StyleSheet,Text, TouchableOpacity} from 'react-native';
import Icon from '../component/Icon';
import CalendarStrip from 'react-native-calendar-strip';


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
            <View>
                <Text style={{fontWeight:'bold',textAlign:'center',padding:10,fontSize:20}}>Circuit House </Text>
            </View>
            <View style={styles.Room}>
                    <TouchableOpacity style={styles.RoomName}
                    onPress={() => navigation.navigate('Room',fstRoom)} >
                      
                          <Text style={{alignSelf:'center',fontWeight:'bold'}}>{fstRoom} </Text>
                          <View style={styles.RoomIcon}>
                          
                            <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                            <Text style={{fontSize:12}}>02</Text>
                            <Icon name={"human-male-male"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                          
                         </View>
                      
                    </TouchableOpacity>
                    <View style={styles.Calender}>
                        <CalendarStrip
                        scrollable
                        
                        style={{height:80, padding:10}}
                        calendarColor={'#fff'}
                        
                        
                        
                        dateNumberStyle={{color: '#000'}}
                        dateNameStyle={{color: '#000'}}
                        iconContainer={{flex: .001}}
                        datesBlacklist={datesBlacklistFunc}
                        onDateSelected={() => navigation.navigate('Entry',fstRoom)}
                        />
                    </View>
                
            </View>

            <View style={styles.Room}>
                    <TouchableOpacity style={styles.RoomName}
                    onPress={() => navigation.navigate('Room',sndRoom)} >
                      
                          <Text style={{alignSelf:'center',fontWeight:'bold'}}> {sndRoom} </Text>
                          <View style={styles.RoomIcon}>
                          
                            <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                            <Text style={{fontSize:12}}>01</Text>
                            <Icon name={"account"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                          
                         </View>
                      
                    </TouchableOpacity>
                    <View style={styles.Calender}>
                        <CalendarStrip
                        scrollable
                        
                        style={{height:80, padding:10}}
                        calendarColor={'#fff'}
                        
                        
                        
                        dateNumberStyle={{color: '#000'}}
                        dateNameStyle={{color: '#000'}}
                        iconContainer={{flex: .001}}
                        datesBlacklist={datesBlacklistFunc}
                        onDateSelected={() => navigation.navigate('Entry',sndRoom)}
                        />
                    </View>
                
            </View>

            <View style={styles.Room}>
                    <TouchableOpacity style={styles.RoomName}
                    onPress={() => navigation.navigate('Room',trdRoom)} >
                      
                          <Text style={{alignSelf:'center',fontWeight:'bold'}}> {trdRoom}</Text>
                          <View style={styles.RoomIcon}>
                          
                            <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                            <Text style={{fontSize:12}}>02</Text>
                            <Icon name={"human-male-male"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                          
                         </View>
                      
                    </TouchableOpacity>
                    <View style={styles.Calender}>
                        <CalendarStrip
                        scrollable
                        
                        style={{height:80, padding:10}}
                        calendarColor={'#fff'}
                        
                        
                        
                        dateNumberStyle={{color: '#000'}}
                        dateNameStyle={{color: '#000'}}
                        iconContainer={{flex: .001}}
                        datesBlacklist={datesBlacklistFunc}
                        onDateSelected={() => navigation.navigate('Entry',trdRoom)}
                        />
                    </View>
                
            </View>

            <View style={styles.Room}>
                    <TouchableOpacity style={styles.RoomName}
                    onPress={() => navigation.navigate('Room',frtRoom)} >
                      
                          <Text style={{alignSelf:'center',fontWeight:'bold'}}> {frtRoom} </Text>
                          <View style={styles.RoomIcon}>
                          
                            <Icon name={"bed"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={35}/>
                            <Text style={{fontSize:12}}>01</Text>
                            <Icon name={"account"} backgroundColor={'#fff'} iconColor={'#6a5acd'} size={30}/>
                          
                         </View>
                      
                    </TouchableOpacity>
                    <View style={styles.Calender}>
                        <CalendarStrip
                        scrollable
                        
                        style={{height:80, padding:10}}
                        calendarColor={'#fff'}
                        
                        
                        
                        dateNumberStyle={{color: '#000'}}
                        dateNameStyle={{color: '#000'}}
                        iconContainer={{flex: .001}}
                        datesBlacklist={datesBlacklistFunc}
                        onDateSelected={() => navigation.navigate('Entry',frtRoom)}
                        />
                    </View>
                
            </View>
            
           
            


            
            {/* <View style={styles.Calender}>
                <View style={styles.Element}>
               
                </View>
            </View> */}





            {/* <View style={styles.Header}>
                <Icon name={"warehouse"} backgroundColor={'#a3d9c9'} iconColor={'#6a5acd'} size={85}/> 
                <Text style={styles.HeaderText} > Welcome to {"\n"} Circuit House   </Text>
            </View> */}
            {/* <View style={styles.Button}>

                <Button 
                 title="Go "
                 color="#fff"
                 onPress={() => navigation.navigate('Status')}
                />
            </View> */}
            {/* <View style={styles.Footer}>
            
                
            </View> */}

        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#F4F8F9',
        
    },
    Room:{
        backgroundColor: '#fff',
        flexDirection:'row',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        
        

    },
    RoomName:{
        flex:.25,
          
    },
    RoomIcon:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        

    },
    Calender:{
        flex:.80,
        

    },
    Element:{
        flex:1,
        height:50

    },
    Header:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        

    },
    HeaderText:{
        fontWeight:'800',
        fontSize: 30,
        textAlign: 'center'

    },
    Button:{
        flex: .10,
        backgroundColor:'#6a5acd',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 50,
        width:'60%',
        
        alignSelf: 'center'
     
    },
   
    Footer:{
        flex: .50,
        

    },
    
})

export default HomePage;