import dictionary from '../data/dictionary.json'
import keyboard from '../data/keyboard.json'

export const getAllCombinations = (inputData) => {
    const input = inputData

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
    return resultsStrings
  }

  export const getExistingWords = (inputData, combinationsData) => {
    const input = inputData

    // Filter dictionary for words of the same lenght as the input number
    const firstFiltering = dictionary.filter(function(e) {
      return e.length == input.length
    })

    // Compare the filteres arrays of words with the possible letter combinations
    let listOfWords = []
    const possibleCombinations = combinationsData
    for (let i = 0; i<possibleCombinations.length; i++) {
      if(firstFiltering.includes(possibleCombinations[i])) {
        listOfWords.push(possibleCombinations[i])
      }
    }

    // Save found words into state
    return listOfWords
  }