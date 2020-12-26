import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import { Route } from 'react-router-dom';

describe('renders the componenet' , () => {
    let container : any;

    beforeEach(() =>(container = shallow(<App />)))

    it('renders app component', () => {
        expect(container).toMatchSnapshot()
    })

    it('contains all the routes' , () =>{
        expect(container.find('div').length).toEqual(1);
    })

    it('contains route element' , () => {
        expect(container.containsMatchingElement(<Route />)).toEqual(true)
    })
    
})