import React from 'react';
import {shallow} from 'enzyme'
import Rockets from './Rockets';

describe('for Rocket Page' , () => {
    let container : any;
    beforeEach(() => container = shallow(<Rockets />))

    it('renders the rocket componenet', () => {
        expect(container).toMatchSnapshot();
    })
    
    
})