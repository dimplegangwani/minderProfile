import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import { Strings } from '../../Localization/Strings';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import { Styles } from './Styles';
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard';
import profileImage from '../../Assets/Images/minderPhoto.png'
import AboutUser from '../../Components/AboutUser/AboutUser';

class MinderProfile extends React.Component {
  render() {
    return (
      <View>
        <HeaderBar />
        <ScrollView contentContainerStyle={Styles.contentContainer}>
          <Image resizeMode='stretch' style={Styles.profilePicture}
            source={profileImage} />
          <ProfileInfoCard />
          <AboutUser />
          <Text>{Strings.greeting}</Text>
        </ScrollView>
      </View>
    )
  }

}

export default MinderProfile;