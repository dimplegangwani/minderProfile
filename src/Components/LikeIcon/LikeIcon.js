import React from 'react'
import { Button, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../../Theme'


export default class LikeIcon extends React.Component {
  render() {
    return (
      <Image style={this.props.styles}
        source={require('../../Assets/Images/mark-favorite.png')}
      />
    )
  }
}