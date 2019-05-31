import React from 'react'
import { View, Text } from 'react-native'
import MinderCard from '../../Commons/MinderCard';
import MinderDivider from '../../Commons/MinderDivider';
import { Styles } from './Styles'
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import { Colors } from '../../../Theme'

export default class CertVerifications extends React.Component {
  render() {
    return (
      <MinderCard title="Certificates and Verification">
        <View style={Styles.grid}>
          <View style={Styles.gridItem}>
            <View style={Styles.gridItemAvatar}>
              <Avatar.Image style={Styles.itemImage} size={60} source={{ uri: 'https://placehold.it/60' }} />
              <Icon
                name='check-circle' type='font-awesome' color={Colors.green}
                containerStyle={Styles.verifiedIcon}
              />
            </View>
            <Text style={Styles.itemText}>Verified Email</Text>
          </View>
          <View style={Styles.gridItem}>
            <View style={Styles.gridItemAvatar}>
              <Avatar.Image style={Styles.itemImage} size={60} source={{ uri: 'https://placehold.it/60' }} />
              <Icon
                name='check-circle' type='font-awesome' color={Colors.green}
                containerStyle={Styles.verifiedIcon}
              />
            </View>
            <Text style={Styles.itemText}>Verified Email</Text>
          </View>
          <View style={Styles.gridItem}>
            <View style={Styles.gridItemAvatar}>
              <Avatar.Image style={Styles.itemImage} size={60} source={{ uri: 'https://placehold.it/60' }} />
            </View>
            <Text style={Styles.itemText}>Verified Email</Text>
          </View>
          <View style={Styles.gridItem}>
            <View Style={Styles.gridItemAvatar}>
              <Avatar.Image style={Styles.itemImage} size={60} source={{ uri: 'https://placehold.it/60' }} />
              <Icon
                name='check-circle' type='font-awesome' color={Colors.green}
                containerStyle={Styles.verifiedIcon}
              />
            </View>
            <Text Style={Styles.itemText}>Verified Email</Text>
          </View>
          <View style={Styles.gridItem}>
            <View style={Styles.gridItemAvatar}>
              <Avatar.Image style={Styles.itemImage} size={60} source={{ uri: 'https://placehold.it/60' }} />
            </View>
            <Text style={Styles.itemText}>Verified Email</Text>
          </View>
        </View>
        <MinderDivider />
        <Text style={Styles.footnote}>* Available upon request</Text>
      </MinderCard>
    );
  }

}