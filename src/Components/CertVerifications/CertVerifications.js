import React from 'react'
import { View, Text } from 'react-native'
import MinderCard from '../../Commons/MinderCard';
import { Styles } from './Styles'
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-paper';
import { Colors } from '../../../Theme'
import { Strings } from '../../Localization/Strings';

export default class CertVerifications extends React.Component {
  render() {
    return (
      <MinderCard title={Strings.certificationsAndVerif}>
        <View style={Styles.grid}>
          {this.props.certifications.map((cert, i) =>
            <View key={i} style={Styles.gridItem}>
              <View style={Styles.gridItemAvatar}>
                <Avatar.Image style={Styles.itemImage} size={45} source={cert.iconURL} />
                {cert.status && <Icon size={16} containerStyle={Styles.verifiedIcon}
                  name='check-circle' type='font-awesome' color={Colors.green} />}
              </View>
              <Text style={Styles.itemText}>{cert.name}</Text>
            </View>
          )}
        </View>
        <Text style={Styles.footnote}>* {Strings.availableOn}</Text>
      </MinderCard>
    );
  }

}