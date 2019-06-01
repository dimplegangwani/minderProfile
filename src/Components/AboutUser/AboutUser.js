import React from 'react'
import { Text } from 'react-native-paper';
import MinderCard from '../../Commons/MinderCard';
import MinderDivider from '../../Commons/MinderDivider';
import MinderButton from '../../Commons/MinderButton';

export default class AboutUser extends React.Component {
  render() {
    const { firstName, about } = this.props
    return (
      <MinderCard title={`About ${firstName}`}>
        <Text>
          {about}
        </Text>
        <MinderDivider />
        <MinderButton onPress={() => console.log('button pressed')}>
          Read More
        </MinderButton>
      </MinderCard>
    )
  }
}