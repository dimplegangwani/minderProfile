import React from 'react'
import { View } from 'react-native'
import { Styles } from './Styles'
import MinderCard from '../../Commons/MinderCard';
import MinderDivider from '../../Commons/MinderDivider';
import ReviewCard from './ReviewCard';
import MinderButton from '../../Commons/MinderButton';
import { Strings } from '../../Localization/Strings';

export default class MinderReviews extends React.Component {

  render() {
    return (
      <MinderCard title={Strings.Reviews}>
        <View style={Styles.reviewCards}>
          {this.props.reviews.map((review, i) =>
            <React.Fragment key={i}>
              <ReviewCard review={review} />
              <MinderDivider width='100%' />
            </React.Fragment>)}
        </View>
        <MinderButton onPress={() => console.log('button pressed')}>
          {Strings.ReadAll}
        </MinderButton>
      </MinderCard>
    );
  }

}