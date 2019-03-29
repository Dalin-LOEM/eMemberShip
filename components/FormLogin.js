import React, {Component} from 'react'
import {Image, View, CheckBox, TouchableOpacity, AsyncStorage, Alert} from 'react-native'
import {
    Container, Header, Title, Content, Left, Right, Icon, Text, Button, Body, Form, Label, Item, Input} from 'native-base'
import { Actions } from 'react-native-router-flux'
import LoginFb from './Login'


export default class FormLogin extends Component{
    constructor(props){
        super(props)
        this.state= {
            checked: false,
            pass: '',
            baseurl: '',
        }
        if(pass == ""){
            
        }
    }  
    onSave = ()=>{
        const {pass} = this.state;
        /*----save data with AsyncStorage----*/
        let myArray={
            pass: pass
        }
        if(pass == ""){
           alert("type password")
        }else{
           AsyncStorage.setItem('myArray',
           JSON.stringify(myArray));
           Alert.alert("Your url save successfully");
        }
     }
  
     showData = async() => {
        let myArray = await AsyncStorage.getItem('myArray');
        let data = JSON.parse(myArray);
        this.setState({pass:data.pass})
     }
    
    LoginForm = async() =>{
       
    }
    render(){
        return(
            <Container>
                <Content>
                    <Image source={require('../assets/images/eMembership.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    <View style={{backgroundColor: 'gray'}}>
                    
                    </View>
                    <Form style={{width: "85%",paddingLeft: "10%"}}>
                        <View>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label >
                                        Password
                                </Label>
                                <Input 
                                    // password={true}
                                    // secureTextEntry={true}
                                    value={this.state.pass}
                                    onChangeText={
                                        pass => this.setState({ pass })
                                    }></Input>
                            </Item>
                        </View>
                        <View style={{flexDirection: 'row',paddingLeft: "3%", marginTop: 10}}>
                            <View>
                                <Text onPress={this.onSave}>save</Text>
                                    <CheckBox
                                        value={this.state.checked}
                                        onPress={() => this.setState({checked: !this.state.checked})}
                                    />
                            </View>
                            <View>
                                <Text style={{marginTop: 4}} onPress={this.showData}>Remember Password</Text>
                            </View>
                        </View>
                        <View>
                            <Button rounded style={{justifyContent: "center", backgroundColor: "#C99E67", width: "90%", 
                                                    height: 30, marginTop: "10%", marginLeft: "7%"}}>
                                <TouchableOpacity>
                                    <Text transparent onPress={()=>Actions.welcomeEs()}>Login</Text>
                                </TouchableOpacity>
                            </Button>
                            <Text/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View>
                                <Text>Have not account?</Text>
                            </View>
                            <View>
                                <Text transparent onPress={()=>Actions.createAcc()} style={{color: 'red'}}> Sign up.</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Text>Or countinue with</Text>
                            </View>
                            <View style={{marginLeft: '5%'}}>
                                <Button rounded style={{ backgroundColor: '#3B5998', width: '100%', height: 25}}>
                                    <Icon name="logo-facebook" />
                                </Button>
                                {/* <LoginFb/> */}
                            </View>
                            <View style={{marginLeft: '3%'}}>
                                <Button rounded style={{ backgroundColor: '#E44C4A', width: '100%', height: 25}}>
                                    <Icon name="logo-googleplus" />
                                </Button>
                            </View>
                            <View style={{marginLeft: '3%'}}>
                                <Button rounded style={{ backgroundColor: '#1FE028', width: '100%', height: 25}}>
                                    <Icon name="logo-whatsapp" />
                                </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
          </Container>
        )
    }
}