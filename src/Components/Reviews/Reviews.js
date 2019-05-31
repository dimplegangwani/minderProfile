import React from 'react'
import { View } from 'react-native'
import { Styles } from './Styles'
import MinderCard from '../../Commons/MinderCard';
import MinderDivider from '../../Commons/MinderDivider';
import ReviewCard from './ReviewCard';
import MinderButton from '../../Commons/MinderButton';

export default class MinderReviews extends React.Component {

  render() {
    return (
      <MinderCard title="Reviews">
        <View style={Styles.reviewCards}>
          <ReviewCard />
          <MinderDivider width='100%' />
          <ReviewCard />
          <MinderDivider width='100%' />
        </View>
        <MinderButton onPress={() => console.log('button pressed')}>
          Read All
        </MinderButton>
      </MinderCard>
    );
  }

}