import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Form from './FormLogin.js'
import History from './History.js'
import CreateAcc from './CreateAcc.js';
import Profile from './Profile.js';
import WelcomeEs from './WelcomeES.js';

const Routes = () => (  
   <Router>
      <Scene key = "root">
         <Scene key = "form" component = {Form} title = "Form" initial = {true} hideNavBar={true}/>
         <Scene key = "history" component = {History} title = "History" hideNavBar={true}/>
         <Scene key = "createAcc" component = {CreateAcc} hideNavBar={true}/>
         <Scene key = "profile" component = {Profile} hideNavBar={true}/>
         <Scene key = "welcomeEs" component = {WelcomeEs} hideNavBar={true}/>
      </Scene>
   </Router>
)
export default Routes