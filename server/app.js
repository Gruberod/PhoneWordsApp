const dictionary = require('../data/dictionary.json')
const keyboard = require('../data/keyboard.json')
const express = require('express')
const app = express()

app.get('/transformation/:code', (req, res) => handleInput(req, res))

const handleInput = (req, res) => {
    const allCombinations = getAllCombinations(req.params.code)
    const filteredWords = getExistingWords(req.params.code, allCombinations)
    res.json({
        combinations: allCombinations,
        words: filteredWords})
}

const getAllCombinations = (inputData) => {
    // Transform the numerical input into array of letters
    let arrayOfInputs = []
    for (let i = 0; i < inputData.length; i++) {
      arrayOfInputs.push(keyboard[inputData[i]])
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

    // Return all possible combinations
    return resultsStrings
  }

const getExistingWords = (inputData, combinationsData) => {
    // Filter dictionary for words of the same lenght as the input number
    const firstFiltering = dictionary.filter(function(e) {
      return e.length == inputData.length
    })

    // Compare the filteres arrays of words with the possible letter combinations
    let listOfWords = []
    const possibleCombinations = combinationsData
    for (let i = 0; i<possibleCombinations.length; i++) {
      if(firstFiltering.includes(possibleCombinations[i])) {
        listOfWords.push(possibleCombinations[i])
      }
    }

    // Return found words
    return listOfWords
  }

app.listen(3000, () => console.log('Example app listening on port 3000!'))