import React from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';

export default class fbScreen extends React.Component{
    render(){
        return(
            <View>
            <View style={{justifyContent: 'center', alignItems:'center', backgroundColor:'#1c4be8'}}>
            <Text style={{fontSize:36, fontWeight:'bold', color:'white'}}>FaceBook</Text>
            <Text style={{fontWeight:'bold', color:'white'}}>your facebook page</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems:'center'}}>
            <iframe id="fb"
    title="fb-page"
    width="395"
    height="537"
    src="https://www.facebook.com">
</iframe>
             
            </View>
            </View>
        )
    }
}