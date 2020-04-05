/*
Login screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './LoginStyle'
import {Input, Button} from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Login extends Component {
  render() {      
    return (
      <Fragment>
       <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeTop}></SafeAreaView>
       <SafeAreaView style={styles.mainView}>
       <KeyboardAwareScrollView bounces={false}>
         <View style={styles.topView}>
          <Text style={styles.title}>Sign In</Text>
         </View>
         <Text style={styles.accountTitle}>Login to your account</Text>
         <View style={styles.bottomView}>
           <Input placeHolderText={'User name'}>
           </Input>
           <Input placeHolderText={'Password'} isSecureEntry= {true}>
           </Input>
           <Button
             title={'SIGN IN'}
             onPress={() => { alert('Login clicked') }}
             />
         </View>
         <TouchableOpacity onPress={() => { this.props.navigation.navigate('Signup')}}>
            <Text style={styles.signupContainer}>
              <Text style={styles.signupStyle}>Don't have an account?</Text>
              <Text style={styles.signup}> Sign up </Text>
            </Text>
          </TouchableOpacity> 
          </KeyboardAwareScrollView>
       </SafeAreaView>
       </Fragment>
    )
  }
}

export default Login;