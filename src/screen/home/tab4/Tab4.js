import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const DATA = [
  // for flat list
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({id, title, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.container,
        styles.item,
        {backgroundColor: selected ? '#0f00ff' : '#ff0fff'},
      ]}>
      <Text> {title} </Text>
      <Button
        title="우아앙.."
        onPress={() => Alert.alert('여기는 다른 액션 이지롱,, ')}
      />
    </TouchableOpacity>
  );
}

export default function Tab4() {
  const [selected, setSelected] = React.useState(new Map());
  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#ff0000" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>

      <View style={[styles.container, styles.horizontal]}>
        <Text> 일단 기본 컨포넌트 라도 다 따라 쳐보자 </Text>
      </View>
      <Separator />
      <View style={[styles.container, styles.horizontal]}>
        <Text>
          {' '}
          그걸로 커스텀해서 자유자재로 쓸수있으면 그때 라이브러리보자{' '}
        </Text>
      </View>

      <View style={[styles.container, styles.horizontal]}>
        <Button
          title="버튼에 타이틀이라는 속성이 .."
          onPress={() =>
            Alert.alert('스타일 커스텀이 ..안되..터치 에이블? 그거 써야됨 ')
          }
        />
      </View>

      <View style={[styles.container, styles.horizontal]}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
        />
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              id={item.id}
              title={item.title}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={(item) => item.id} // 애는...?
          extraData={selected} // 앤멀까..
          ItemSeparatorComponent={() => <Separator />}
        />
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
        />
      </View>
      <View style={[styles.container, styles.horizontal]}></View>
      <View style={[styles.container, styles.horizontal]}></View>
      <View style={[styles.container, styles.horizontal]}></View>
      <View style={[styles.container, styles.horizontal]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
  },
  separator: {
    paddingVertical: true ? 1 : 8,
    backgroundColor: '#00F000',
  },
  item: {
    flex: 1,
    backgroundColor: '#f0d0ae',
  },
});
