import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReservationsPage from '../pages/ReservationsPage';

const mockStore = configureMockStore();
const store = mockStore({
  user: {
    user: {
      id: 1,
      reservations: [
        {
          id: 1,
          event_id: 1,
          user_id: 1,
          start: '2022-02-02',
          end: '2022-03-03',
        },
      ],
    },
  },
  events: {
    events: [
      {
        id: 1,
        name: 'name',
        location: 'location',
        image_urls: ['images'],
        price: 123,
        start_date: '2022-01-01',
        end_date: '2023-01-01',
      },
      {
        id: 2,
        name: 'bar',
        location: 'ation',
        start_date: '2022-01-01',
        end_date: '2023-01-01',
        price: 123,
        image_urls: ['images/bar.jpg'],
      },
    ],
  },
});

jest.mock('../redux/reducers/users', () => ({
  signIn: () => ({ type: 'MOCK' }),
}));

it('matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <ReservationsPage />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
