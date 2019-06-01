import React from 'react'
import { View } from 'react-native';
import { Surface, Text, Headline } from 'react-native-paper';
import { Styles } from './Styles';
import LikeIcon from '../LikeIcon/LikeIcon'
import { Colors } from '../../../Theme';
import { Divider, Rating } from 'react-native-elements';
import Spacer from '../Spacer';

export default class ProfileInfoCard extends React.Component {
  state = {
    responseRate: 100,
    location: 'Near Bondi Beach',
    rating: 4.5,
    completedJobs: 104,
    repeatBookings: 26,
    cancelledJobs: 1
  }

  render() {
    const {
      displayName, distance, locationName, responseRate,
      completedJobs, repeatBookings, cancelledJobs
    } = this.props.profileInfo
    return (
      <Surface style={Styles.profileInfoCard}>
        <LikeIcon styles={Styles.likeIcon} />
        <Headline>{displayName}</Headline>
        <View style={Styles.userMeta}>
          <Text style={Styles.location}>{distance} {locationName}</Text>
          <Text style={Styles.responseRate}>{responseRate}% Response Rate</Text>
        </View>
        <Rating
          readonly
          ratingColor={Colors.green}
          startingValue={this.state.rating}
          imageSize={25}
          tintColor="white"
          type='custom'
        />
        <Divider style={Styles.divider} />
        <View style={Styles.userStats}>
          <View style={Styles.stats}>
            <Text>{completedJobs}</Text>
            <Text style={Styles.statsText}>Completed Jobs</Text>
          </View>
          <View style={Styles.stats}>
            <Text>{repeatBookings}</Text>
            <Text style={Styles.statsText}>Repeat Booking</Text>
          </View>
          <View style={Styles.stats}>
            <Text>{cancelledJobs}</Text>
            <Text style={Styles.statsText}>Cancelled Jobs</Text>
          </View>
        </View>
        <Spacer top={25} />
      </Surface>
    )
  }

}