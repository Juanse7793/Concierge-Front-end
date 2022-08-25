import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sidebar from '../components/Sidebar';

// jest.mock
const mockStore = configureMockStore();
const store = mockStore({ signedIn: true });

it('should match snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Sidebar />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
