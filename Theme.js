import { DefaultTheme } from 'react-native-paper';

export const Colors = {
  white: '#fff',
  primary: '#484549',
  backgroundPrimary: '#ECECEC',
  green: '#31CB94',
  primaryText: '#484549',
  secondaryText: '#D8D8D8',
  purple: '#9B3FD9',
  mutedText: '#000'
}

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white,
    accent: 'red',
  }
};