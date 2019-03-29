import React, {Component} from 'react'
import { Text,
         AsyncStorage,
         Alert
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, 
         Button, 
         Content, 
         Input, 
         Item, 
         Right,
         Header ,
         Left,
         Icon,
         Body,
         Title
} from 'native-base';
import I18n from '../i18n';
const goToHome = () => {
   Actions.home()
}
  
class About extends Component{
   constructor(props){
      super(props);
      this.state = {
         baseurl: ''
      }
      this.showData();
   }
   
   OnSave = ()=>{
      const {baseurl} = this.state;
      /*----save data with AsyncStorage----*/
      let myArray={
         baseurl: baseurl
      }
      if(baseurl == ""){
         alert("Please type your url")
      }else{
         AsyncStorage.setItem('myArray',
         JSON.stringify(myArray));
         Alert.alert("Your url save successfully");
      }
   }

   showData = async() => {
      let myArray = await AsyncStorage.getItem('myArray');
      let data = JSON.parse(myArray);
      this.setState({baseurl:data.baseurl})
   }
   render(){
      return (
         <Container onPress = {goToHome}>
         <Header style={{backgroundColor: 'white'}}>
                    <Left>
                        <Button transparent onPress={()=>Actions.home()}>
                        <Icon style={{color: 'black'}} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{I18n.t('setting')}</Title>
                    </Body>
                    <Right />
                </Header>
           <Content style={{padding: '5%'}}>
              <Item regular>
                 <Input 
                     value={this.state.baseurl}
                     onChangeText={
                        baseurl => this.setState({ baseurl })
                     }
                    placeholder='Type your url here' />
              </Item>
                 <Right style={{padding: '5%'}}>
                    <Button info style={{height: 30}}>
                       <Text style={{width: '40%', textAlign: 'center'}} onPress={this.OnSave}>{I18n.t('saveurl')}</Text>
                    </Button>
                    <Text/>
                    {/* <Button primary style={{height: 30}}>
                       <Text style={{width: '40%', textAlign: 'center'}} onPress={this.showData}>Show Data</Text>
                    </Button> */}
                 </Right>
           </Content>
        </Container>
     )
   }      
}
export default About