/*
Detail screen
*/

import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native'
import styles from './DetailStyle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Rating } from 'react-native-elements';
import { Images } from '../../theme'
import { Actions } from 'react-native-router-flux';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Detail extends Component {

  backButtonClicked() {
    Actions.pop()
  }

  // Render UI objects 
  render() {
    return (
      <>
        <ScrollView bounces={false}>
          <View style={styles.mainConatiner}>
            <View style={styles.topContainer}>
              <SafeAreaView></SafeAreaView>
              <TouchableOpacity style={styles.backButton} onPress={() => { this.backButtonClicked() }}>
                <Image source={Images.back} />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.infoRowStyle}>
                <View style={styles.titleContainer}>
                  <Text style={styles.nameStyle}>Banjara villa</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Rating
                    readonly
                    type='star'
                    ratingCount={5}
                    imageSize={20}
                    style={styles.ratingStyle}
                  />
                  <Text style={styles.reviewStyle}>2300 Reviews</Text>
                </View>
                <Text style={styles.mealsStyle}>Tea, sancks, meat</Text>
                <Text style={styles.priceStyle}>$$$</Text>
                <Text style={styles.addressStyle}>12 Danum Rd, Brampton</Text>
              </View>
              <View style={styles.mapContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}
                >
                </MapView>
              </View>
              <View style={styles.infoRowStyle}>
                <Text style={styles.mapAddressStyle}>11 Danum Rd</Text>
                <Text style={styles.mapAddressStyle}>Brampton</Text>
                <Text style={styles.mapAddressStyle}>L6Y 3G5</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    )
  }
}


export default Detail;