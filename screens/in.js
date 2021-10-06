import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';


export default class inScreen extends React.Component{
    render(){
        return(
            <View>
            <View style={{justifyContent: 'center', alignItems:'center', backgroundColor:'purple'}}>
            <Text style={{fontSize:36, fontWeight:'bold', color:'white'}}>Instagram</Text>
            <Text style={{fontWeight:'bold', color:'white'}}>your instagram page</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems:'center'}}>
            <iframe id="in"
    title="in-page"
    width="395"
    height="537"
    src="https://www.instagram.com">
</iframe>
             
            </View>
            </View>
        )
    }
}