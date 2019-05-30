import React from 'react'
import { View } from 'react-native'
import { Avatar } from 'react-native-paper';
import MinderCard from '../../Commons/MinderCard';
import avatar1 from '../../Assets/Images/friendPhoto1.png'
import avatar2 from '../../Assets/Images/friendPhoto2.png'
import avatar3 from '../../Assets/Images/friendPhoto3.png'
import { Styles } from './Styles';
export default class CommonContacts extends React.Component {
  render() {
    return (
      <MinderCard title="You both know">
        <View style={Styles.avatarHolder}>
          <Avatar.Image size={42} source={avatar1} style={Styles.avatar} />
          <Avatar.Image size={42} source={avatar2} style={Styles.avatar} />
          <Avatar.Image size={42} source={avatar3} style={Styles.avatar} />
        </View>
      </MinderCard>
    )
  }
}