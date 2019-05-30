import React from 'react'
import { Surface, Text, Headline, Button } from 'react-native-paper';
import { Divider } from 'react-native-elements';
import { StyleSheet } from 'react-native'
import Spacer from '../Components/Spacer'
import MinderDivider from './MinderDivider';

export default class MinderCard extends React.Component {
  render() {
    return (
      <Surface style={Styles.MinderCard}>
        <Headline style={Styles.MinderHeading}>{this.props.title}</Headline>
        <MinderDivider />
        {this.props.children}
      </Surface>
    )
  }
}

const Styles = StyleSheet.create({
  MinderCard: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    paddingBottom: 15
  },
  MinderHeading: {
    marginTop: 15
  }
})