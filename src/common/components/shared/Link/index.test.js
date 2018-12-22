import React from 'react'
import Component from './'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Add New button', () => {
	it('renders add new button properly', () => {
		const tree = shallow(<Component to="/home" text="You can add 2 more children" />)
		expect(toJson(tree)).toMatchSnapshot()
	})
})
