import React from 'react'
import { View } from 'react-native';
import { Surface, Text, Headline } from 'react-native-paper';
import { Styles } from './Styles';
import LikeIcon from '../LikeIcon/LikeIcon'
import { Colors } from '../../../Theme';
import { Divider, Rating } from 'react-native-elements';
import Spacer from '../Spacer';
import { Strings } from '../../Localization/Strings';

export default class ProfileInfoCard extends React.Component {

  render() {
    const {
      displayName, distance, locationName, responseRate,
      completedJobs, repeatBookings, cancelledJobs, rating
    } = this.props.profileInfo
    return (
      <Surface style={Styles.profileInfoCard}>
        <LikeIcon styles={Styles.likeIcon} />
        <Headline style={Styles.heading}>{displayName}</Headline>
        <View style={Styles.userMeta}>
          <Text style={Styles.location}>{distance} {locationName}</Text>
          <Text style={Styles.responseRate}>{responseRate}% {Strings.responseRate}</Text>
        </View>
        <Rating
          readonly
          ratingColor={Colors.green}
          startingValue={rating}
          imageSize={25}
          tintColor="white"
          ratingBackgroundColor='lightgrey'
          type='custom'
        />
        <Divider style={Styles.divider} />
        <View style={Styles.userStats}>
          <View style={Styles.stats}>
            <Text style={Styles.numbers} >{completedJobs}</Text>
            <Text style={Styles.statsText}>{Strings.completedJobs}</Text>
          </View>
          <View style={Styles.statsMiddle}>
            <Text style={Styles.numbers} >{repeatBookings}</Text>
            <Text style={Styles.statsText}>{Strings.repeatJobs}</Text>
          </View>
          <View style={Styles.stats}>
            <Text style={Styles.cancelled}>{cancelledJobs}</Text>
            <Text style={Styles.statsText}>{Strings.cancelledJobs}</Text>
          </View>
        </View>
        <Spacer top={25} />
      </Surface>
    )
  }

}