
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
   StyleSheet,
    Text,
     View,
     WebView,
     ScrollView,
     TextInput,
     TouchableOpacity,
     Alert,
     SafeAreaView,
     AsyncStorage,
     Dimensions,
     Button
    //  Geolocation
    } from 'react-native';
 
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window'); 
// var Geolocation = require('Geolocation');
// geolocation.setRNConfiguration(config);

//code-push release-react book-ios ios -m -d Production
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class MAP extends Component<Props> {
  static navigationOptions = {
    title: 'index',
    /* No more header config here! */
  };
constructor(props){
  super(props);
  this.indexHistory = [0];
  this.state = {
    all_font_num: 0,
    index: 0,
    reading:0,
    data: "這裡還沒有文章喔",
    lang:true,
    num:1,
    font:true,
    fontFamily:"",
    initialPosition: 'unknown',
    lastPosition: 'unknown',
    currentLocation: 'unknown',
    loading: false,
    updatesEnabled: false,
    location: {}
};
}
watchId = null;


componentWillMount() {
   
  
  // this.getLocation();
  // data=TS(text);
//   this.setState({ data: Traditionalized(BookBody) });

}
// componentDidMount() {
//   Geolocation.getCurrentPosition((location) => {
//     let coordinate = [location.coords.longitude,location.coords.latitude]
//     this.setState({
//         currentLocation:coordinate
//     })
// });
// }
componentDidMount() {
  // Instead of navigator.geolocation, just use Geolocation.
  // if (hasLocationPermission) {
  //     Geolocation.getCurrentPosition(
  //         (position) => {
  //             console.log(position);
  //         },
  //         (error) => {
  //             // See error code charts below.
  //             console.log(error.code, error.message);
  //         },
  //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //     );
  // }
}



  render() {
    const { loading, location, updatesEnabled } = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>

      {/* <ScrollView style={{flex: 1}}> */}
<View style={{flex: 1,flexDirection:'column'}}>
{/* <Button title='Get Location' onPress={this.getLocation} disabled={loading || updatesEnabled} /> */}
        <View style={styles.buttons}>
            {/* <Button title='Start Observing' onPress={this.getLocationUpdates} disabled={updatesEnabled} />
            <Button title='Stop Observing' onPress={this.removeLocationUpdates} disabled={!updatesEnabled} /> */}
        </View>

        <View style={styles.result}>
            {/* <Text>{JSON.stringify(location, null, 4)}</Text> */}
        </View>

</View>

    {/* </ScrollView> */}
    </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
