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
          {this.props.certifications.map((cert, i) =>
            <View key={i} style={Styles.gridItem}>
              <View style={Styles.gridItemAvatar}>
                <Avatar.Image style={Styles.itemImage} size={60} source={cert.iconURL} />
                {cert.status && <Icon containerStyle={Styles.verifiedIcon}
                  name='check-circle' type='font-awesome' color={Colors.green} />}
              </View>
              <Text style={Styles.itemText}>{cert.name}</Text>
            </View>
          )}
        </View>
        <MinderDivider />
        <Text style={Styles.footnote}>* Available upon request</Text>
      </MinderCard>
    );
  }

}