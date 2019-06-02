import React from 'react'
import { View, Text } from 'react-native'
import { Styles } from './Styles'
import { Avatar } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import { Colors } from '../../../Theme'

export default class ReviewCard extends React.Component {
  render() {
    const { review } = this.props
    return (
      <View style={Styles.reviewCard}>
        <View style={Styles.leftReview}>
          <Avatar.Image size={50} source={review.profileURL} style={Styles.avatar} />
        </View>
        <View style={Styles.rightReview}>
          <View style={Styles.reviewMeta}>
            <Text style={Styles.reviewMetaLeft}>{review.displayName}</Text>
            <Text style={Styles.reviewMetaRight}>{review.timestamp}</Text>
          </View>
          <Rating
            readonly
            ratingColor={Colors.green}
            startingValue={parseInt(review.rating)}
            imageSize={25}
            tintColor="white"
            type='custom'
            style={Styles.rating}
          />
          <Text>{review.review}</Text>
        </View>
      </View>
    );
  }

}