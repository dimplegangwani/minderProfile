import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import MinderProfile from './src/Screens/Minderprofile/MinderProfile';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './Theme'

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
