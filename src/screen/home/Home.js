import React from 'react';
import {SafeAreaView} from 'react-native';
import StringKr from 'StringKr';
import StyleCommon from 'StyleCommon';
import {CardView, Button} from 'components';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Tab1 from 'screen/home/tab1/Tab1';
import Tab2 from 'screen/home/tab2/Tab2';
import Tab3 from 'screen/home/tab3/Tab3';
import Tab4 from 'screen/home/tab4/Tab4';

const Tab = createMaterialTopTabNavigator();

// 메인탭 3번째 화면 여기다 일단 옮겨 놓음
const HomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
      <Tab.Screen name="Tab4" component={Tab4} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
