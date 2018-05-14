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
      expect(wrapper.find('div').prop('title')).toBe(undefined)
      
    })
    it('when user is defined', () => {
      const { wrapper, getTree } = renderComponent({
        ...initProps,
        user: { 
          id: 234234,
          email: 'el@gmail.com'
        }
      })
      expect(getTree()).toMatchSnapshot()
      expect(wrapper.find('div').prop('title')).toBe('el@gmail.com')
    })
  })
})