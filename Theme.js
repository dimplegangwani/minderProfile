import { DefaultTheme } from 'react-native-paper';

export const Colors = {
  white: '#fff',
  primary: '#484549',
  black: '#444444',
  backgroundPrimary: '#ECECEC',
  green: '#31CB94',
  primaryText: '#484549',
  secondaryText: '#808080',
  purple: '#9B3FD9',
  mutedText: 'grey',
  red: 'red'
}

export const Extras = {
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'cabin-regular',
    color: Colors.black
  }
}

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.purple,
    primary: Colors.white,
    accent: Colors.green
  }
};