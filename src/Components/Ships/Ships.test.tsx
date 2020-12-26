import React from 'react';
import {shallow} from 'enzyme';
import Ships from './Ships';

describe('Ship Test Case', () => {
    let container : any;

    beforeEach(() => container = shallow(<Ships />))
    it('renders the ships' , () => {
        expect(container).toMatchSnapshot();
    })
})
