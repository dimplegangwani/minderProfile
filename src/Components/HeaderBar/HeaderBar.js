import React from 'react'
import { Appbar } from 'react-native-paper';
import { Strings } from '../../Localization/Strings';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => alert('go back function here!')}
        />
        <Appbar.Content
          title={Strings.headerTitle}
        />
      </Appbar.Header>
    );
  }
}