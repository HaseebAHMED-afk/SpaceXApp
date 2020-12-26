import React from 'react'
import {shallow} from 'enzyme'
import TopNav from './TopNav';

describe('TopNav test case', () => {
    let container : any;

    beforeEach(() => container = shallow(<TopNav />))

    it('renders the TopNav' , () => {
        expect(container).toMatchSnapshot();
    })
})
