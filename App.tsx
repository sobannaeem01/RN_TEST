import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Appearance,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App(): React.JSX.Element {

  const navigationRef = createNavigationContainerRef();




  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={"black"}
      />

      <View style={{
        flex: 1,
        paddingTop: 30,
        backgroundColor: "red",

      }}>


        <NavigationContainer
          ref={navigationRef}>

          <View
            style={{
              flex: 1,
            }}>

            <RootNavigator />


          </View>

        </NavigationContainer>



      </View>

    </SafeAreaView>
  );
}

export default App;
