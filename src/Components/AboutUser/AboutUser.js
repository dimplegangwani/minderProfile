import React from 'react'
import { Text } from 'react-native-paper';
import { View, Animated } from 'react-native';
import MinderCard from '../../Commons/MinderCard';
import MinderButton from '../../Commons/MinderButton';
import { Extras } from '../../../Theme';
import { Styles } from './Styles';
import { Strings } from '../../Localization/Strings';


export default class AboutUser extends React.Component {
  state = {
    charlength: 180,
    showMore: false,
    heightAnim: new Animated.Value(100) // i would calculate this height in a real environment instead of hardcoding
  }

  handleShowMore = () => {
    this.setState({
      showMore: !this.state.showMore
    }, () => {
      Animated.timing(
        this.state.heightAnim, {
          toValue: this.state.showMore === false ? 100 : 180,
          duration: 200,
        }
      ).start();
    })
  }

  render() {
    const { firstName, about } = this.props
    let { heightAnim } = this.state;

    return (
      <MinderCard title={Strings.about + ' ' + firstName}>
        <View style={Styles.aboutCard}>
          <Animated.View                 // Special animatable View
            style={{
              ...this.props.style,
              height: heightAnim,         // Bind height to animated value
            }}
          >
            <Text style={Extras.bodyText}>
              {this.state.showMore === true
                ? about
                : `${about.slice(0, this.state.charlength)}...`}
            </Text>
          </Animated.View>
        </View>

        <MinderButton onPress={() => this.handleShowMore()}>
          {this.state.showMore === false ? Strings.readMore : Strings.readLess}
        </MinderButton>
      </MinderCard>
    )
  }
}