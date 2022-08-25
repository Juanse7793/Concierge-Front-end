import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const mockStore = configureMockStore();
const store = mockStore({
  events: {
    events: [
      {
        id: 1,
        name: 'foo',
        location: 'loc',
        start_date: '2022-01-01',
        end_date: '2023-01-01',
        price: 123,
        image_urls: ['images/foo.jpg'],
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
      {
        id: 3,
        name: 'foobar',
        location: 'location',
        start_date: '2022-01-01',
        end_date: '2023-01-01',
        price: 123,
        image_urls: ['images/foo.jpg', 'images/bar.jpg'],
      },
    ],
    adding: false,
  },
});

jest.mock('../redux/reducers/events', () => ({
  fetchEvents: () => ({ type: 'MOCK' }),
}));

it('matches snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <MainPage />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
