import React from 'react';
import { View, SafeAreaView } from 'react-native';
import MinderProfile from './src/Screens/Minderprofile/MinderProfile';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './Theme'

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <View>
            <MinderProfile style={{ flex: 1 }} />
          </View>
        </SafeAreaView>
      </PaperProvider>
    );
  }
}
