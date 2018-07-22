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
import dictionary from './data/dictionary.json'
import keyboard from './data/keyboard.json'

export default class App extends React.Component {

  state = {
    toTransform: '',
    combinations: [],
    words: []
  }
  
  getCombinationsAndFilterWords = () => {
    this.getAllCombinations()
    this.getExistingWords()
  }

  getAllCombinations = () => {
    // Hides the keyboard
    Keyboard.dismiss()

    const input = this.state.toTransform

    // Transform the numerical input into array of letters
    let arrayOfInputs = []
    for (let i = 0; i < input.length; i++) {
      arrayOfInputs.push(keyboard[input[i]])
    }

    // Generate all combinations of given letters
    generateAllCombinations = (arr) => {
      return arr.reduce((a, b) =>
        a.map(x => b.map(y => x.concat(y)))
        .reduce((a, b) => a.concat(b), []), [[]])
    }

    let result = generateAllCombinations(arrayOfInputs)
    let resultsStrings = []

    result.forEach((element)=>{
    resultsStrings.push(element.join(""))
      })

    // Save all possible combinations into state
    this.setState({
          combinations: resultsStrings
        })
  }

  getExistingWords = () => {
    
    const input = this.state.toTransform

    // Filter dictionary for words of the same lenght as the input number
    const firstFiltering = dictionary.filter(function(e) {
      return e.length == input.length
    })

    // Compare the filteres arrays of words with the possible letter combinations
    let listOfWords = []
    const possibleCombinations = this.state.combinations
    for (let i = 0; i<possibleCombinations.length; i++) {
      if(firstFiltering.includes(possibleCombinations[i])) {
        listOfWords.push(possibleCombinations[i])
      }
    }

    // Save found words into state
    this.setState({
      words: listOfWords
    })
  }

  // Display all possible combinations
  renderCombinations = () => {
    if(this.state.combinations.length > 0) {
      return 
      <View style={styles.output}>
        <Button
          color="red"
          title="get words"
          onPress={this.getExistingWords}
        />
        <ScrollView>{(this.state.combinations).join(", ")}</ScrollView>
      </View>
    }
    else {
      return
        <Text style={styles.output}>No combinations</Text>
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
          onChangeText={(toTransform) => this.setState({toTransform})}
        />
        <Button
          color="#8B0000"
          title="submit"
          onPress={this.getCombinationsAndFilterWords}
        />
        <Text style={styles.output}>
          {this.renderWords()}
        </Text>
        {this.renderCombinations()}
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
