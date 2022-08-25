import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../pages/Login';

const mockStore = configureMockStore();
const store = mockStore({ user: { error: false } });

it('matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
