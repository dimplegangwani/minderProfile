import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './Theme'
import MinderProfile from './src/Screens/Minderprofile/MinderProfile.js';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  render() {
    return (
      <PaperProvider theme={theme}>
        <SafeAreaView>
          <View className='mainApp'>
            {this.state.fontLoaded ? <MinderProfile /> : null}
          </View>
        </SafeAreaView>
      </PaperProvider>
    );
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'cabin-regular': require('./src/Assets/Fonts/Cabin-Regular.ttf'),
      'cabin-bold': require('./src/Assets/Fonts/Cabin-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }
}
