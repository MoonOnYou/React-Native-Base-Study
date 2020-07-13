import React from 'react';
import {SafeAreaView} from 'react-native';
import StringKr from 'StringKr';
import StyleCommon from 'StyleCommon';
import {CardView, Button} from 'components';

// 메인탭 3번째 화면 여기다 일단 옮겨 놓음
const HomeScreen = ({navigation}) => {
  const goto = () => {
    navigation.navigate('Home2');
  };
  return (
    <SafeAreaView style={StyleCommon.safeArea}>
      <Button title="home2" onPress={goto} />
      <CardView text={StringKr.TEST1} icon={require('image/iconTest.png')} />
      <CardView text={StringKr.TEST2} />
      <CardView text={StringKr.TEST3} />
    </SafeAreaView>
  );
};

export default HomeScreen;
