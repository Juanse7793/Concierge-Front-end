import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AddEvent from '../pages/AddEvent';

const mockStore = configureMockStore();
const store = mockStore({
  events: {
    events: [{
      id: 1,
      name: 'name',
      location: 'location',
      image_urls: ['images'],
      price: 123,
      start_date: '2022-01-01',
      end_date: '2023-01-01',
    }],
    adding: false,
    loading: false,
  },
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}));

jest.mock('../redux/reducers/users', () => ({
  signIn: () => ({ type: 'MOCK' }),
}));

it('matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <AddEvent />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
