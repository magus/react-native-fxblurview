/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import FXBlurView from 'react-native-fxblurview'


const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT,
} = Dimensions.get('window');


class FXBlurViewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // blurEnabled: false,
      // blurRadius: 0,
      blurEnabled: true,
      blurRadius: 10,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        blurEnabled: !this.state.blurEnabled,
        blurRadius: this.state.blurRadius + 1,
      })
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>

        <FXBlurView
          blurRadius={this.state.blurRadius}
          blurEnabled={this.state.blurEnabled}
          dynamic={true}
          style={styles.container}>

          <Image
            source={require('./Tycho-Dive-C.png')}
            resizeMode="contain" />

        </FXBlurView>

        <View style={styles.overlay}>
          <Text style={styles.text}>
            Tycho - Dive
          </Text>
          <Text style={[styles.text, {fontSize: 14}]}>
            { "Dive is the third album by the electronica artist Tycho. Released November 8, 2011 on Ghostly International." }
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  overlay: {
    width: 320,

    position: 'absolute',
    top: 250,
    left: (DEVICE_WIDTH / 2) - (320 / 2),
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('FXBlurViewExample', () => FXBlurViewExample);
