import React from 'react'
import { Text } from 'react-native-paper';
import MinderCard from '../../Commons/MinderCard';
import MinderDivider from '../../Commons/MinderDivider';
import MinderButton from '../../Commons/MinderButton';

export default class AboutUser extends React.Component {
  render() {
    return (
      <MinderCard title="About Samantha">
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores odio itaque veritatis minima dignissimos, temporibus aut vero magni. Perspiciatis, voluptate culpa blanditiis nulla consectetur non amet asperiores voluptatibus nemo fugiat?
        </Text>
        <MinderDivider />
        <MinderButton onPress={() => console.log('button pressed')}>
          Read More
        </MinderButton>
      </MinderCard>
    )
  }
}