import React from 'react'
import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from 'react-native'
import keyboard from './data/keyboard.json'

export default class App extends React.Component {

  state = {
    toTransform: '',
    inputError: '',
    combinations: [],
    words: []
  }
  
  getCombinationsAndFilterWords = async() => {
    // Hides the keyboard
    Keyboard.dismiss()
    
    // Call backend for getting data based on input
    const result = await fetch('http://localhost:3000/transformation/' + this.state.toTransform)
    const data = await result.json()

    // Set all found combinations and words into state
    this.setState({
      combinations: data.combinations,
      words: data.words
    })
  }

  validateInput = (inputValue) => {
    // Validate input for 2-9 digits only
    const validCharacters = Object.keys(keyboard)
    for (let i = 0; i<inputValue.length; i++) {
      if (!validCharacters.includes(inputValue[i])) {
        // Inform user if anyting else is found
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
      return <FlatList
      keyExtractor={(item) => item}
      data={this.state.combinations}
      renderItem={({item}) => {
        return <Text key={item} style={styles.combinations}>{item}</Text>
      }}
    />
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
      <Text style={styles.header}>PHONE WORDS APP</Text>
        <Text style={styles.instuctions}>write up to 8 digits</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          textAlign={'center'}
          maxLength={8}
          value={this.state.toTransform}
          onChangeText={(toTransform) => this.validateInput(toTransform)}
        />
        <Button
          disabled={this.state.inputError != ''}
          color="#ffffff"
          title="SEARCH"
          onPress={this.getCombinationsAndFilterWords}
        />
        <Text style={styles.output}>
          {this.state.inputError}
        </Text>
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
    backgroundColor: '#21cbb4'
  },
  header: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: '#2f353b'
  },
  instuctions: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: '#2f353b'
  },
  input: {
    width: 200,
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#067093',
    backgroundColor: '#e0e0e0',
    borderColor: '#d6d7da',
    fontSize: 18,
    margin: 20
  },
  output: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    color: '#2f353b'
  },
  combinations: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 1,
    color: '#2f353b'
  }
});
