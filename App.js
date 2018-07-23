import React from 'react'
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native'
import {
  getAllCombinations,
  getExistingWords
} from './functions/generators.js'
import keyboard from './data/keyboard.json'

export default class App extends React.Component {

  state = {
    toTransform: '',
    inputError: '',
    combinations: [],
    words: []
  }
  
  getCombinationsAndFilterWords = () => {
    // Hides the keyboard
    Keyboard.dismiss()

    const resultCombinations = getAllCombinations(this.state.toTransform)
    const resultWords = getExistingWords(this.state.toTransform, resultCombinations)
    this.setState({
      combinations: resultCombinations,
      words: resultWords
    })
  }

  validateInput = (inputValue) => {
    const validCharacters = Object.keys(keyboard)
    for (let i = 0; i<inputValue.length; i++) {
      if (!validCharacters.includes(inputValue[i])) {
        this.setState({inputError: "Please use only digits representing letters (2-9)"})
        return
      }
    }
    this.setState({
      toTransform: inputValue,
      inputError: ''
    })
  }

  // Display all possible combinations
  renderCombinations = () => {
    if(this.state.combinations.length > 0) {
      return <Text style={styles.output}>{(this.state.combinations).join(", ")}</Text>
    }
    else {
      return <Text style={styles.output}>No combinations</Text>
    }
  }

  // Display all matching words from dictionary
  renderWords = () => {
    if(this.state.words.length > 0) {
      return <Text style={styles.output}>{(this.state.words).join(", ")}</Text>
    }
    else {
      return <Text style={styles.output}>No coresponding words found</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instuctions}>Write up to 8 digits</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          textAlign={'center'}
          maxLength={8}
          value={this.state.toTransform}
          onChangeText={(toTransform) => this.validateInput(toTransform)}
        />
        <Text style={styles.output}>{this.state.inputError}</Text>
        <Button
          disabled={this.state.inputError != ''}
          color="#8B0000"
          title="submit"
          onPress={this.getCombinationsAndFilterWords}
        />
        <ScrollView>
          {this.renderWords()}
          {this.renderCombinations()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
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
  },
  output: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    color: '#8B0000'
  }
});
