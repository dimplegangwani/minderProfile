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
import { Strings } from '../../Localization/Strings';

class MinderProfile extends React.Component {
  render() {
    if (!minder.profileURL) {
      return (
        <View>
          <Text>{Strings.loading}</Text>
        </View>
      )
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
            <CertVerifications certifications={minder.certs} />
            <Spacer top={20} />
            <MinderReviews reviews={minder.reviews} />
            <Spacer top={20} />
          </ScrollView>
        </View>
      )
    }
  }
}

export default MinderProfile;