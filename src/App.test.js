import testHelper from './helpers/test-helper'
import App from './App';

// it('should render without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App.WrappedComponent />, div);
// });

describe('<App />', () => {
  const renderCompoennt = testHelper(App.WrappedComponent)
  const props = {
    getChatLog: jest.fn()
  }
  beforeEach(() => props.getChatLog.mockClear())      
  describe('@renders', () => {
    it('in default state', () => {
      expect(renderCompoennt(props).getTree())
        .toMatchSnapshot()
    })
  })
  describe('@lifecycle', () => {
    describe('componentDidMount', () => {
      it('should call getChatLog', () => {
        const { instance } = renderCompoennt(props)
        expect(instance.props.getChatLog).toHaveBeenCalledTimes(1)
      })
    })
  })
})