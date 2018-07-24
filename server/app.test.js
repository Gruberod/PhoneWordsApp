const testedFunctions = require('../app.js')

describe('getAllCombinations', () => {
  it('should return all possible letter combinations', () => {
    const result = testedFunctions.getAllCombinations('66')
    const expectedResult = ['mm', 'mn', 'mo', 'nm', 'nn', 'no', 'om', 'on', 'oo']

      expect(result).toBeDefined()
      expect(data).toEqual(expectedResult)
  })
})

describe('getExistingWords', () => {
    it('filter dictionary for existing words based on possible letter combinations', () => {
      const result = testedFunctions.getExistingWords('66', possibleCombinations)
      const possibleCombinations = ['mm', 'mn', 'mo', 'nm', 'nn', 'no', 'om', 'on', 'oo']
      // Surprisingly all those are indeed in the 10 000 most used english words :)
      const expectedResult = ['mm', 'mn', 'mo', 'nm', 'nn', 'no', 'om', 'on', 'oo']

        expect(result).toBeDefined()
        expect(data).toEqual(expectedResult)
    })
  })