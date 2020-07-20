import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from 'react-native';

export default function Tab2() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput placeholder="Username" style={styles.textInput} />
          <Button title="Submit" onPress={() => null} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 52,
    marginBottom: 120,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
  },
});
