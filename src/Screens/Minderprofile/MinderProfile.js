import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import { Strings } from '../../Localization/Strings';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import { Styles } from './Styles';
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard';
import profileImage from '../../Assets/Images/minderPhoto.png'
import AboutUser from '../../Components/AboutUser/AboutUser';
import CommonContacts from '../../Components/CommonContacts/CommonContacts';
import Spacer from '../../Components/Spacer';
import CertVerifications from '../../Components/CertVerifications/CertVerifications';
import MinderReviews from '../../Components/Reviews/Reviews';

class MinderProfile extends React.Component {
  render() {
    return (
      <View>
        <ScrollView stickyHeaderIndices={[0]}
          contentContainerStyle={Styles.contentContainer}>
          <HeaderBar />
          <Image resizeMode='stretch' style={Styles.profilePicture}
            source={profileImage} />
          <ProfileInfoCard />
          <AboutUser />
          <Spacer top={20} />
          <CommonContacts />
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

export default MinderProfile;