import React from 'react'
import { View, Text } from 'react-native';
import { Strings } from '../../Localization/Strings';

class MinderProfile extends React.Component {

  render() {
    return (
      <View>
        <Text>{Strings.greeting}</Text>
      </View>
    )
  }
}

export default MinderProfile;