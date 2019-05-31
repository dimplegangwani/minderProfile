import React from 'react'
import { View, Text } from 'react-native'
import { Styles } from './Styles'
import { Avatar } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import { Colors } from '../../../Theme'

export default class ReviewCard extends React.Component {
  render() {
    return (
      <View style={Styles.reviewCard}>
        <View style={Styles.leftReview}>
          <Avatar.Image size={50} source={{ uri: 'http://placehold.it/60' }} style={Styles.avatar} />
        </View>
        <View style={Styles.rightReview}>
          <View style={Styles.reviewMeta}>
            <Text style={Styles.reviewMetaLeft}>Marie S.</Text>
            <Text style={Styles.reviewMetaRight}>2 days ago</Text>
          </View>
          <Rating
            readonly
            ratingColor={Colors.green}
            startingValue={5}
            imageSize={25}
            tintColor="white"
            type='custom'
            style={Styles.rating}
          />
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit fuga hic magnam earum aliquid aperiam, id, sint vel dolores quisquam odio! Repudiandae labore ea aperiam sed, nostrum qui nobis.</Text>
        </View>
      </View>
    );
  }

}