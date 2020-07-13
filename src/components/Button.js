import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
