import renderer from 'react-test-renderer';
import AboutPage from '../pages/AboutPage';

it('matches snapshot', () => {
  const component = renderer.create(
    <AboutPage />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
