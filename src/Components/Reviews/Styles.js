import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Styles = StyleSheet.create({
  reviewCards: {
    flexDirection: 'column'
  },
  reviewCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  leftReview: { width: 75 },
  rightReview: { width: screenWidth - 115 },
  reviewMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rating: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5
  }
});
