import { StyleSheet } from 'react-native';

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
    padding: 5
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 80,
    height: 110,
    margin: 5
  },
  itemImage: {
    position: 'relative',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemAvatar: {
    position: 'relative',
  },
  verifiedIcon: {
    position: 'absolute',
    bottom: 7,
    right: 7
  },
  itemText: {
    textAlign: 'center'
  }
});
