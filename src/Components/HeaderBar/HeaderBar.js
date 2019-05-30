import React from 'react'
import { Appbar } from 'react-native-paper';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => alert('go back function here!')}
        />
        <Appbar.Content
          title="Minder Profile"
        />
      </Appbar.Header>
    );
  }
}