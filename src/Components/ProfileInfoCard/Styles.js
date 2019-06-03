import { StyleSheet } from 'react-native';
import { Colors } from '../../../Theme'

export const Styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'cabin-bold'
  },
  profileInfoCard: {
    minHeight: 200,
    marginTop: -60,
    margin: 15,
    backgroundColor: '#ffffff',
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
  },
  likeIcon: {
    position: 'absolute',
    top: -20,
    right: 25
  },
  userMeta: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  location: { marginEnd: 5 },
  responseRate: { marginStart: 5 },
  divider: {
    backgroundColor: Colors.secondaryText, width: '90%', marginTop: 20, marginBottom: 15
  },
  userStats: {
    flex: 1,
    flexDirection: 'row',
  },
  statsMiddle: { flex: 1, flexDirection: 'row' },
  stats: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  statsMiddle: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center'
  },
  statsText: {
    width: 90,
    textAlign: 'center',
    marginTop: 4,
    color: Colors.secondaryText
  },
  numbers: {
    fontWeight: "600"
  },
  cancelled: {
    fontWeight: "600",
    color: Colors.red
  }
});
