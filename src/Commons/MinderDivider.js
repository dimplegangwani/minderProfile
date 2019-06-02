import React from 'react'
import { Divider } from 'react-native-elements';
import { StyleSheet } from 'react-native'

export default class MinderDivider extends React.Component {
  render() {
    return (
      <Divider style={this.Styles.MinderDivider} />
    );
  }
  Styles = StyleSheet.create({
    MinderDivider: {
      backgroundColor: 'grey',
      width: (typeof (this.props.width) === 'undefined') ? '90%' : this.props.width,
      marginTop: 13,
      marginBottom: 13
    }
  })
}