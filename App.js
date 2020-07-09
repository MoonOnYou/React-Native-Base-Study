/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import StringKr from './src/res/StringKr';
import CommonStyle from './src/CommonStyle';
import CardView from './src/components/CardView';

const App = () => {
  //
  return (
    <SafeAreaView style={CommonStyle.safeArea}>
      <CardView
        text={StringKr.TEST1}
        icon={require('./src/res/Image/iconTest.png')}
      />
      <CardView text={StringKr.TEST2} />
      <CardView text={StringKr.TEST3} />
    </SafeAreaView>
  );
};

export default App;
