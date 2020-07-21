import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Tab1 from 'screen/home/tab1/Tab1';
import Tab2 from 'screen/home/tab2/Tab2';
import Tab3 from 'screen/home/tab3/Tab3';
import Tab4 from 'screen/home/tab4/Tab4';

const Tab = createMaterialTopTabNavigator();

function WriteBtn() {
  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[
        styles.writeBtn,
        {backgroundColor: selected ? '#00ff00' : '#ff0000'},
      ]}
    />
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
        <Tab.Screen name="Tab3" component={Tab3} />
        <Tab.Screen name="Tab4" component={Tab4} />
      </Tab.Navigator>
      <WriteBtn />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  writeBtn: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
