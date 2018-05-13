import testHelper from '../../../helpers/test-helper'
import ChatMessage from '../ChatMessage'

describe('<ChatMessage/>', () => {
  const renderComponent = testHelper(ChatMessage)
  const initProps = {
    message: {
      id: 2348,
      message: 'Hi, this is a mocked message'
    }
  }
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(initProps).getTree()).toMatchSnapshot()
    })
  })
})