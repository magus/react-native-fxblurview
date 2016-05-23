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
  View
} from 'react-native';

import FXBlurView from 'react-native-fxblurview'

class FXBlurViewExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blurEnabled: false,
      blurRadius: 0,
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
      <FXBlurView
        blurRadius={this.state.blurRadius}
        blurEnabled={this.state.blurEnabled}>

        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>

      </FXBlurView>
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

AppRegistry.registerComponent('FXBlurViewExample', () => FXBlurViewExample);
