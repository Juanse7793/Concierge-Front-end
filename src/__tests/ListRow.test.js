import renderer from 'react-test-renderer';
import ListRow from '../components/ListRow';

it('matches snapshot', () => {
  const component = renderer.create(
    <ListRow
      caption="caption"
      text="text"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
