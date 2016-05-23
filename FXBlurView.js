'use strict'
import React, { Component } from 'react';
import { View } from 'react-native';
import { requireNativeComponent } from 'react-native';

class FXBlurView extends Component {
  render() {
    return (
      <FXBlurViewNative
        {...this.props}
        style={[
          {
            flex: 1,
            backgroundColor: 'transparent',
          },
          this.props.style,
        ]} />
    );
  }
}

FXBlurView.propTypes = {
  blurRadius: React.PropTypes.number,
  blurEnabled: React.PropTypes.bool,
  dynamic: React.PropTypes.bool,
};

const FXBlurViewNative = requireNativeComponent('RCTFXBlurView', FXBlurView);

export default FXBlurView;
