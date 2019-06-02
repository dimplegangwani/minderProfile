import React from 'react'
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import MinderCard from '../../Commons/MinderCard';
import MinderButton from '../../Commons/MinderButton';
import { Extras } from '../../../Theme';
import { Styles } from './Styles';
import { Strings } from '../../Localization/Strings';


export default class AboutUser extends React.Component {
  render() {
    const { firstName, about } = this.props
    return (
      <MinderCard title={Strings.about + ' ' + firstName}>
        <View style={Styles.aboutCard}>
          <Text style={Extras.bodyText}>
            {about}
          </Text>
        </View>
        <MinderButton onPress={() => console.log('button pressed')}>
          {Strings.readMore}
        </MinderButton>
      </MinderCard>
    )
  }
}