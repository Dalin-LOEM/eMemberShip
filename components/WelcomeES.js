import React, {Component} from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'
import {Container, Icon} from 'native-base'
import { Actions } from 'react-native-router-flux'

import * as Progress from 'react-native-progress';
export default class WelcomeES extends Component{
    render(){
        return(
            <Container style={{backgroundColor: '#34596C', }}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}>
                    <View>
                        <Text style={{fontSize: 30, color: 'white'}}>eMembership</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}>
                   <View style={{
                       borderRadius: 90,
                       borderWidth: 0.5,
                       height: 39,
                       width: 40,
                       borderColor: '#d6d7da',
                       backgroundColor: 'white'
                   }}>
                        <Icon name="person" style={{marginLeft: '21%', marginTop: 3}}/>
                   </View>
                   <View>
                       <Text style={{ fontSize: 22}}>   Welcome Tony!</Text>
                   </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text> ____________________________________________</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}>
                    <View style={{marginRight: '10%'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon name="star"/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{color: '#C99D6E', fontWeight: 'bold', fontSize: 20}}>1,140</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{fontSize: 10}}>EARNED CASH</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/images/u729.png')} style={{height: '32%', width: 2}}/>
                    </View>
                    <View style={{paddingLeft: '10%'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Icon name="pulse"/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{color: '#C99D6E', fontWeight: 'bold', fontSize: 20}}>Gold</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Text style={{fontSize: 10}}>LEVELS</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '-28%'}}>
                    <View>
                        <Progress.Pie progress={0.4} size={150} borderColor="#C99D6E" />
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text> ____________________________________________</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Icon transparent onPress={()=>Actions.history()} name="cart"><Text style={{fontSize: 16}}>   Your purchase history</Text></Icon>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text> ____________________________________________</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={require('../assets/images/default_qrcode.png')} style={{height: 80, width: 80, marginTop: '10%', }}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}>
                    <View>
                        <Text>Sign Out</Text>
                    </View>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    Text:{
        color: 'white'
    }
})