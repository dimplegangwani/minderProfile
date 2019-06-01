import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './Theme'
import MinderProfile from './src/Screens/Minderprofile/MinderProfile.js';
export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <View className='mainApp'>
            <MinderProfile />
          </View>
        </SafeAreaView>
      </PaperProvider>
    );
  }
}
