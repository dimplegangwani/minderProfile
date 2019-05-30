import React from 'react'
import { View } from 'react-native';

export default class Spacer extends React.Component {
  render() {
    return (
      <View
        style={{
          marginTop: this.props.top,
          marginBottom: this.props.bottom
        }}></View>
    );
  }
}