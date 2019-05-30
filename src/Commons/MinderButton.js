import React from 'react'
import { Button } from 'react-native'
import { Colors } from '../../Theme'

export default class MinderButton extends React.Component {
  render() {
    return (
      <Button
        title={this.props.children}
        color={Colors.primary}
        onPress={this.props.onPress}
      />
    );
  }
}
