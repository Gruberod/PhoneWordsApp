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

      expect(textInput).toHaveLength(1)
      expect(button).toHaveLength(1)
      expect(scrollView).toHaveLength(1)
  })
})