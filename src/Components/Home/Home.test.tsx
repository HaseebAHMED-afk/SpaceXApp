import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import Footer from '../Utils/Footer/Footer'


describe('renders component' , () =>{
    let container : any;

    beforeEach(() => container = shallow(<Home />))

    it ('renders all the div' , () =>{
        expect(container.find('div').length).toBeGreaterThanOrEqual(4)
    })

    it('renders footer', () => {
        expect(container.containsMatchingElement(<Footer />)).toEqual(true)
    })


})