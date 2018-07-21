import React, {Component} from 'react';
import {Button, Keyboard, Platform, StyleSheet, Text, TextInput, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instuctions}>Write up to 8 digits</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          textAlign={'center'}
          maxLength={8}
        />
        <Button
          color="#8B0000"
          title="submit"
          onPress={Keyboard.dismiss}
        />
        <Text style={styles.output}>The result words will be displayed here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  instuctions: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: '#8B0000'
  },
  input: {
    width: 200,
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    backgroundColor: '#e0e0e0',
    borderColor: '#d6d7da',
    fontSize: 18,
    margin: 20
  }
});
