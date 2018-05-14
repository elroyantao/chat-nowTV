import testHelper from '../../../helpers/test-helper'
import ChatRoom from '../ChatRoom'

describe('<ChatRoom/>', () => {
  const renderComponent = testHelper(ChatRoom.WrappedComponent)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent().getTree()).toMatchSnapshot()
    })
    it('when messages are defined', () => {
      const props = {
        messages: [{ id: 123 }, { id: 32425 }, { id: 923 }]
      }
      const { wrapper, getTree } = renderComponent(props)
      expect(getTree()).toMatchSnapshot()
      expect(wrapper.find('Connect(ChatMessage)').length).toBe(3)
    })
  })
})