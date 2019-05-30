import React from 'react'
import { Divider } from 'react-native-elements';
import { StyleSheet } from 'react-native'

export default class MinderDivider extends React.Component {
  render() {
    return (
      <Divider style={Styles.MinderDivider} />
    );
  }
}

const Styles = StyleSheet.create({
  MinderDivider: {
    backgroundColor: 'grey',
    width: '90%',
    marginTop: 13,
    marginBottom: 13,
  }
})