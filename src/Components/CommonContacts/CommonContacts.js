import React from 'react'
import { View } from 'react-native'
import { Avatar } from 'react-native-paper';
import MinderCard from '../../Commons/MinderCard';
import { Styles } from './Styles';
export default class CommonContacts extends React.Component {
  render() {
    if (typeof (this.props.commonFriends) === 'undefined')
      return null
    else
      return (
        <MinderCard title="You both know">
          <View style={Styles.avatarHolder}>
            {this.props.commonFriends.map((friend, i) =>
              <Avatar.Image key={i} size={42} source={friend.profileURL} style={Styles.avatar} />
            )}
          </View>
        </MinderCard>
      )
  }
}