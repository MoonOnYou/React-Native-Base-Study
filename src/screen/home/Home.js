import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Tab1 from 'screen/home/tab1/Tab1';
import Tab2 from 'screen/home/tab2/Tab2';
import Tab3 from 'screen/home/tab3/Tab3';
import Tab4 from 'screen/home/tab4/Tab4';

const Tab = createMaterialTopTabNavigator();

function WriteBtn() {
  const [selected, setSelected] = useState(false);

  return (
    <View style={styles.containerWrite}>
      <View
        style={[selected ? styles.visibleWriteDetail : styles.goneWriteDetail]}>
        <View style={styles.containerRow}>
          <Text>일단 적어봅니다.. </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setSelected(!selected)}
        style={[
          styles.btnWrite,
          {backgroundColor: selected ? '#00ff00' : '#ff0000'},
        ]}
      />
    </View>
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
  containerRow: {
    flex: 1,
    flexDirection: 'row',
  },
  containerWrite: {
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  iconWriteDetail: {},
  textWriteDetail: {},
  visibleWriteDetail: {
    width: 100,
    height: 100,
  },
  goneWriteDetail: {
    width: 0,
    height: 0,
  },
  btnWrite: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
