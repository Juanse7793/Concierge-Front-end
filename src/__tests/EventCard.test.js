import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import EventCard from '../components/EventCard';

it('matches snapshot', () => {
  const component = renderer.create(
    <Router>
      <EventCard event={{
        id: 1,
        name: 'Event Name',
        image_urls: ['images/event'],
        location: 'Event Location',
        price: '10',
      }}
      />
      ,
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
