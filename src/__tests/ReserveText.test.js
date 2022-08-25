import renderer from 'react-test-renderer';
import ReserveText from '../components/ReserveText';

it('matches snapshot', () => {
  const component = renderer.create(
    <ReserveText />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
