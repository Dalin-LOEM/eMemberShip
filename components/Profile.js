import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Picker} from 'react-native'
import {Container, Icon, Button, Header, Left, Right, Title, Body} from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class CreateAcc extends Component{
    constructor(props){
        super(props)
        this.state={
            address: '',
            zipCode: '',
            city: '',
            country: 'Cambodia',
            mobilePhone: '',
            fixedPhone: '',
            wechatId: '',
        }
    }
    render(){
        return(
            <Container>
                <View style={{justifyContent: 'center', flexDirection: 'row', marginLeft: '5%', marginTop: '5%'}}>
                    <Left>  
                        <Icon transparent onPress={()=>Actions.createAcc()} style={{color: 'black'}} name='arrow-back' />
                    </Left>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={{fontSize: 26, color: '#34596C'}}>eMembership</Text>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={{fontSize: 16, color: 'black', marginTop: '5%'}}>Perfect your profile</Text>
                </View>    
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.address}
                            placeholder="Address"
                            onChangeText={
                            address => this.setState({ address })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.zipCode}
                            placeholder="Zip Code"
                            onChangeText={
                            zipCode => this.setState({ zipCode })
                        }/>
                    </View>  
                </View>
                <View style={styles.mainStyle}>
                    <View style={styles.picker}>
                        <Picker
                                style={styles.pickers}
                                selectedValue= {this.state.city}
                                onValueChange={(itemValue, ItemIndex) => this.setState({city: itemValue})}
                            >
                            <Picker.Item label="Phnom Penh" value="Phnom Penh"/>
                            <Picker.Item label="Paris" value="Paris"/>
                            <Picker.Item label="Tsuen Wan" value="Tsuen Wan"/>
                            <Picker.Item label="Seoul" value="Seoul"/>
                            <Picker.Item label="Kuala Lumpur" value="Kuala Lumpur"/>
                        </Picker>
                    </View>  
                </View>
                <View style={styles.mainStyle}>
                    <View style={styles.picker}>
                        <Picker
                                style={styles.pickers}
                                selectedValue= {this.state.country}
                                onValueChange={(itemValue, ItemIndex) => this.setState({country: itemValue})}
                            >
                            <Picker.Item label="Cambodia" value="Cambodia"/>
                            <Picker.Item label="France" value="France"/>
                            <Picker.Item label="Hong Kong" value="Hong Kong"/>
                            <Picker.Item label="Korean" value="Korean"/>
                            <Picker.Item label="Malaysia" value="Malaysia"/>
                        </Picker>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.mobilePhone}
                            placeholder="Mobile Phone"
                            onChangeText={
                                mobilePhone => this.setState({ mobilePhone })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.fixedPhone}
                            placeholder="Fixed Phone"
                            onChangeText={
                                fixedPhone => this.setState({ fixedPhone })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.wechatId}
                            placeholder="Wechat ID"
                            onChangeText={
                                wechatId => this.setState({ wechatId })
                        }/>
                    </View>  
                </View>
                <View style={styles.mainStyle}>
                    <Button rounded style={{justifyContent: "center", backgroundColor: "#C99E67", width: "60%", 
                                            height: 30, marginTop: "5%"}}>
                        <Text>CONFIRM</Text>
                    </Button>
                </View>
                <View style={styles.mainStyle}>
                    <View style={{marginTop: '3%'}}>
                        <Text>Already have an account? </Text> 
                    </View>
                    <View style={{marginTop: '3%'}}>
                        <Text style={{color: '#C99E67'}}>  Sing in </Text> 
                    </View>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create ({
    mainStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputtext: {
        borderWidth: 0.4,
        width: '65%',
        height: 30,
        fontSize: 12,
        borderColor: '#9e9e9e',
        borderRadius: 0.4,
        marginTop: '3%'
    },
    picker: {
        width: '65%',
        height: 35,
        borderColor: '#9e9e9e',
        borderWidth: 0.4,
        borderRadius: 1,
        marginTop: '3%',
    },
    pickers: {
        marginTop: '-3%',
        fontSize: 18
    },
})