import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StyleCommon from 'StyleCommon';
import Navigation from 'navigation';

const App = () => {
  return (
    <SafeAreaView style={StyleCommon.safeArea}>
      <Text>바깥쪽1</Text>
      <Navigation />
      <Text>바깥쪽2</Text>
    </SafeAreaView>
  );
};

export default App;
