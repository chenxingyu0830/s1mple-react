import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

import { mount } from 'enzyme'


describe('icon', () => {
    it('render successfully', () => {
        const json = renderer.create(<Icon name="weChat" />).toJSON()
        expect(json).toMatchSnapshot()
    })

    it('onClick', () => {
        const fn = jest.fn()
        const compoent = mount(<Icon name="wechat" onClick={fn} />)
        compoent.find('svg').simulate("click")
        expect(fn).toBeCalled()
    })
})