import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import EventsPage from '../pages/EventsPage';

const mockStore = configureMockStore();
const store = mockStore({
  user: { user: { id: 1, name: 'John' } },
  events: {
    events: [
      {
        id: 1,
        name: 'foo',
        start_date: '2022-01-01',
        end_date: '2023-01-01',
      },
    ],
    adding: false,
  },
});

it('matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <EventsPage />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
