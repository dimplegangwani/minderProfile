import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import { Styles } from './Styles';
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard';
import AboutUser from '../../Components/AboutUser/AboutUser';
import CommonContacts from '../../Components/CommonContacts/CommonContacts';
import Spacer from '../../Components/Spacer';
import CertVerifications from '../../Components/CertVerifications/CertVerifications';
import MinderReviews from '../../Components/Reviews/Reviews';
import { minder } from '../../data/minderProfile';

class MinderProfile extends React.Component {
  state = {
    profileData: {},
    url: require("../../Assets/Images/minderPhoto.png")
  }


  render() {
    if (!minder.profileURL) {
      return (<View><Text>Loading...</Text></View>)
    }
    else {
      const { firstName, about } = minder
      return (
        <View>
          <ScrollView stickyHeaderIndices={[0]}
            contentContainerStyle={Styles.contentContainer}>
            <HeaderBar />
            <Image resizeMode='stretch' style={Styles.profilePicture}
              source={minder.profileURL} />
            <ProfileInfoCard profileInfo={minder} />
            <AboutUser firstName={firstName} about={about} />
            <Spacer top={20} />
            <CommonContacts commonFriends={minder.commonFriends} />
            <Spacer top={20} />
            <CertVerifications />
            <Spacer top={20} />
            <MinderReviews />
            <Spacer top={20} />
          </ScrollView>
        </View>
      )
    }

  }

  componentDidMount = () => {
    this.setState({
      profileData: minder
    })
  }
}

export default MinderProfile;