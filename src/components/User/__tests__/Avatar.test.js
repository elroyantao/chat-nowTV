import testHelper from '../../../helpers/test-helper'
import Avatar from '../Avatar'

describe('<Avatar/>', () => {
  const renderComponent = testHelper(Avatar)
  const props = {
    avatar: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    alt: 'Tom'
  }
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent(props).getTree()).toMatchSnapshot()
    })
    it('when no avatar', () => {
      expect(renderComponent({
        ...props,
        avatar: undefined
      }).getTree()).toMatchSnapshot()
    })
    it('when no avatar and alt', () => {
      expect(renderComponent({
        ...props,
        avatar: undefined,
        alt: undefined
      }).getTree()).toMatchSnapshot()
    })
  })
})