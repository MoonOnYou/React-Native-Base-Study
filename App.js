/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import StringKr from 'StringKr';
import StyleCommon from 'StyleCommon';
import CardView from 'components/CardView';

const App = () => {
  //
  return (
    <SafeAreaView style={StyleCommon.safeArea}>
      <CardView text={StringKr.TEST1} icon={require('image/iconTest.png')} />
      <CardView text={StringKr.TEST2} />
      <CardView text={StringKr.TEST3} />
    </SafeAreaView>
  );
};

export default App;
