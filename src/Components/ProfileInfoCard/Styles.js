import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  profileInfoCard: {
    minHeight: 200,
    marginTop: -60,
    margin: 15,
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 7,
    position: 'relative'
  },
  likeIcon: {
    position: 'absolute',
    top: -20,
    right: 25
  },
  userMeta: { flex: 1, flexDirection: 'row' },
  location: { marginEnd: 5 },
  responseRate: { marginStart: 5 },
  divider: { backgroundColor: 'grey', width: '90%', marginTop: 15, marginBottom: 15 },
  userStats: { flex: 1, flexDirection: 'row' },
  stats: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  statsText: { width: 90, textAlign: 'center' }
});
