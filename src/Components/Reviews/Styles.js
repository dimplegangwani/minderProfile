import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../Theme';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Styles = StyleSheet.create({
  reviewCards: {
    flexDirection: 'column',
    paddingTop: 10
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
  reviewMetaLeft: {
    fontSize: 18
  },
  reviewMetaRight: {
    color: Colors.mutedText
  },
  rating: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5
  }
});
