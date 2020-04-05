/*
Search screen
*/

import React, { Component, Fragment } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native'
import styles from './SearchStyle'
import { Input, Button } from '../../components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { password_regex, user_name_regex } from '../../Utilis'
import * as Constants from '../../Constants'

class Search extends Component {

  // Render UI objects 
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      )
  }
}

export default Search;