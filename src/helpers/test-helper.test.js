import { compareByTimestamp } from './time-helpers'
describe('test-helper.js', () => {
  describe('compareByTimestamp', () => {
    const later = { timestamp: '2016-11-24T15:49:20Z' }
    const earlier = { timestamp: '2016-07-16T18:18:26Z' }
    it('should give a positive number if first > second', () => {
      expect(compareByTimestamp(later, earlier)).toBeGreaterThan(0)
    })
    it('should give a negative number if first < second', () => {
      expect(compareByTimestamp(earlier, later)).toBeLessThan(0)
    })
  })
})