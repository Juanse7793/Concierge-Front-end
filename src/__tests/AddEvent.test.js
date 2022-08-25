import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AddEvent from '../pages/AddEvent';

const mockStore = configureMockStore();
const store = mockStore({ events: { adding: false } });

it('matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <AddEvent />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
