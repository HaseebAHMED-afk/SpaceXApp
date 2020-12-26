import React from 'react';
import {shallow} from 'enzyme';
import MainNav from './MainNav';

describe('renders nav' , () => {
    let container : any;

    beforeEach(() => container = shallow(<MainNav />))

    it('renders the main nav' , () => {
        expect(container).toMatchSnapshot()
    })

    it('renders the div' , () => {
        expect(container.find('div').length).toEqual(1)
    })
})