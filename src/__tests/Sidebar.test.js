import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sidebar from '../components/Sidebar';

it('matches snapshot', () => {
  const component = renderer.create(
    <Router>
      <Sidebar />
    </Router>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
