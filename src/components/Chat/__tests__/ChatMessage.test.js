import testHelper from '../../../helpers/test-helper'
import ChatMessage from '../ChatMessage'

describe('<ChatMessage/>', () => {
  const renderComponent = testHelper(ChatMessage.WrappedComponent)
  const initProps = {
    message: {
      id: 2348,
      message: 'Hi, this is a mocked message'
    }
  }
  describe('@renders', () => {
    it('in default state', () => {
      const { wrapper, getTree } = renderComponent(initProps)
      expect(getTree()).toMatchSnapshot()
      expect(wrapper.find('.ChatMessage').prop('title')).toBe(undefined)
      
    })
    it('when user is defined', () => {
      const { wrapper, getTree } = renderComponent({
        ...initProps,
        user: { 
          id: '0d9496c4-2490-40e6-a0c3-0964e371f1ab',
          firstName: 'Henry',
          lastName: 'Harrison',
          email: 'hharrisonj@github.io',
          avatar: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
          ip: '125.12.50.203'
        }
      })
      expect(getTree()).toMatchSnapshot()
      expect(wrapper.find('.ChatMessage').prop('title')).toBe('hharrisonj@github.io')
    })
  })
})