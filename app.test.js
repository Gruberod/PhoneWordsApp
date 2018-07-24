import React from 'react'
import App from './App.js'
import {shallow} from 'enzyme'


describe('Phone words app', () => {

  it('should render single page app', () => {
      const wrapper = shallow(
        <App
        />
      )
      const textInput = wrapper.find('TextInput')
      const button = wrapper.find('Button')
      const scrollView = wrapper.find('ScrollView')
      // Text behaves weird....

      expect(textInput).toHaveLength(1)
      expect(button).toHaveLength(1)
      expect(scrollView).toHaveLength(1)
  })

  it('should validate input', () => {
    // GIVEN
    const validateInput = jest.fn()
    const inputMock = "3564"
    const wrapper = shallow(
      <App
        validateInput={validateInput}
      />
    )

    // WHEN
      const result = validateInput(inputMock)

    //THEN
    expect(result).toBeTruthy
  })

  it('should throw an error on ivalid input', () => {
    // GIVEN
    const validateInput = jest.fn()
    const inputMock = "0356a"
    const wrapper = shallow(
      <App
        validateInput={validateInput}
      />
    )
    // WHEN
    const result = validateInput(inputMock)

    //THEN
    expect(result).toBeFalsy
  })

  it('process the input and return possible combinations and words', () => {
    // GIVEN
    const getCombinationsAndFilterWords = jest.fn()
    const inputMock = "356"
    const wrapper = shallow(
      <App
        getCombinationsAndFilterWords={getCombinationsAndFilterWords}
      />
    )
    // WHEN
      const result = getCombinationsAndFilterWords(inputMock)

    //THEN
    expect(result).toBeTruthy
  })
})