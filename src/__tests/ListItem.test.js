import renderer from 'react-test-renderer';
import ListItem from '../components/ListItem';

it('matches snapshot', () => {
  const component = renderer.create(
    <ListItem
      name="name"
      start="start"
      end="end"
      deleteFunc={() => {}}
      id={1}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
