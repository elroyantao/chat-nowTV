import testHelper from '../../../helpers/test-helper'
import Time from '../Time'

describe('<Time/>', () => {
  const renderComponent = testHelper(Time)
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderComponent({
        timestamp: '2016-11-24T15:49:20Z'
      }).getTree()).toMatchSnapshot()
    })
  })
})