import React from 'react'
import {shallow} from 'enzyme'
import Launch from './Launch'
import Footer from '../Utils/Footer/Footer'

describe('renders the Launch' ,() =>{

    let container : any;

    beforeEach(() => container = shallow(<Launch  />))

    it('renders the components' , () => {
        expect(container).toMatchSnapshot();
    })

    it('renders the div' , () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })

    it('renders the footer' ,() =>{
        expect(container.containsMatchingElement(<Footer />)).toEqual(true)
    } )
})