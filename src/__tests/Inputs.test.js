import renderer from 'react-test-renderer';
import { InputText, DateRange } from '../components/Inputs';

it('matches snapshot', () => {
  const component = renderer.create(
    <InputText
      text="name"
      value="Concierge"
      func={() => {}}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const component2 = renderer.create(
    <DateRange
      func={() => {}}
    />,
  );
  const tree2 = component2.toJSON();
  expect(tree2).toMatchSnapshot();
});
