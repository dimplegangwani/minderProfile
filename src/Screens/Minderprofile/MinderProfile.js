import React from 'react'
import { View, Text, Image } from 'react-native';
import { Strings } from '../../Localization/Strings';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';
import { Styles } from './Styles';
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard';
import profileImage from '../../Assets/Images/minderPhoto.png'

class MinderProfile extends React.Component {

  render() {
    return (
      <View>
        <HeaderBar />
        <Image resizeMode='stretch' style={Styles.profilePicture}
          source={profileImage} />
        <ProfileInfoCard />
        <Text>{Strings.greeting}</Text>
      </View>
    )
  }
}

export default MinderProfile;