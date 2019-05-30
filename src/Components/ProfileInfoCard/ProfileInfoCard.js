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
    return (
      <Surface style={Styles.profileInfoCard}>
        <LikeIcon styles={Styles.likeIcon} />
        <Headline>Samantha J</Headline>
        <View style={Styles.userMeta}>
          <Text style={Styles.location}>{this.state.location}</Text>
          <Text style={Styles.responseRate}>{this.state.responseRate}% Response Rate</Text>
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
            <Text>123</Text>
            <Text style={Styles.statsText}>Completed Jobs</Text>
          </View>
          <View style={Styles.stats}>
            <Text>23</Text>
            <Text style={Styles.statsText}>Repeat Booking</Text>
          </View>
          <View style={Styles.stats}>
            <Text>123</Text>
            <Text style={Styles.statsText}>Cancelled Jobs</Text>
          </View>
        </View>
        <Spacer top={15} bottom={10} />
      </Surface>
    )
  }

}