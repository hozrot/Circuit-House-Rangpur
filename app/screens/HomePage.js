import React from 'react';
import { View ,StyleSheet,Text, Button} from 'react-native';
import Icon from '../component/Icon';


function HomePage( {navigation} ) {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
            <Icon name={"warehouse"} backgroundColor={'#a3d9c9'} iconColor={'#6a5acd'} size={85}/> 
                <Text style={styles.HeaderText} > Welcome to {"\n"} Circuit House   </Text>
                

            </View>
            <View style={styles.Button}>

                <Button 
                 title="Get Started   >> "
                 color="#fff"
                 onPress={() => navigation.navigate('Status')}
                />
                    

                
            </View>
            <View style={styles.Footer}>
            
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#a3d9c9'
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