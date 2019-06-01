import { StyleSheet, Dimensions } from 'react-native';

console.log('dimens', Math.round(Dimensions.get('window').width))
export const Styles = StyleSheet.create({
  footnote: {
    color: 'grey',
    textAlign: 'left',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: Math.round(Dimensions.get('window').width / 4) - 10,
    height: 110
  },
  itemImage: {
    position: 'relative',
    width: undefined,
    height: undefined,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemAvatar: {
    position: 'relative',
  },
  verifiedIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  itemText: {
    textAlign: 'center'
  }
});
