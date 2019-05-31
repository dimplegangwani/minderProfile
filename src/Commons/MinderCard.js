import React from 'react'
import { Surface, Headline } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'
import MinderDivider from './MinderDivider';

export default class MinderCard extends React.Component {
  render() {
    return (
      <Surface style={Styles.MinderCard}>
        <Headline style={Styles.MinderHeading}>{this.props.title}</Headline>
        <MinderDivider />
        <View style={Styles.CardContent}>
          {this.props.children}
        </View>
      </Surface>
    )
  }
}

const Styles = StyleSheet.create({
  MinderCard: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    elevation: 1,
    paddingBottom: 15
  },
  MinderHeading: {
    marginTop: 15
  },
  CardContent: {
    paddingStart: 10,
    paddingEnd: 10
  }
})