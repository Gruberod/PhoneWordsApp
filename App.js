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


export default class App extends React.Component {

  state = {
    toTransform: '',
    combinations: [],
    words: []
  }
  
  getAllCombinations = () => {
    Keyboard.dismiss()
    const mockedData = [["g", "h", "i"], ["d", "e", "f"], ["j", "k", "l"], ["j", "k", "l"], ["m", "n", "o"]]
    console.log("I am in")

    generateAllCombinations = (arr) => {
      console.log("I am in=========================")
      return arr.reduce((a, b) =>
        a.map(x => b.map(y => x.concat(y)))
        .reduce((a, b) => a.concat(b), []), [[]])
    }

    let result = generateAllCombinations(mockedData)
    let resultsStrings = []

    result.forEach((element)=>{
    resultsStrings.push(element.join(""))
      })

    this.setState({
          combinations: resultsStrings
        })
    console.log("result==================" + resultsStrings)
  }

  renderContent = () => {
    if(this.state.combinations.length > 0) {
      return <Text style={styles.output}>{(this.state.combinations).join(", ")}</Text>
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
          onPress={this.getAllCombinations}
        />
        <ScrollView style={styles.output}>
          {this.renderContent()}
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
    textAlign: 'center',
    margin: 20,
    color: '#8B0000'
  }
});
