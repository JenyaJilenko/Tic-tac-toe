import React       from 'react';
import { shallow } from 'enzyme';

import TicTac from '../TicTac';

describe('<TicTac />', () => {
  it(`should render <Board /> component`, () => {
    const component = shallow(
      <TicTac />
    );

    expect(component.find('Board').length).toEqual(1);
  });

  it(`should render <Message /> component`, () => {
    const component = shallow(
      <TicTac />
    );

    expect(component.find('Message').length).toEqual(1);
  });

  it(`should render <Sets /> component`, () => {
    const component = shallow(
      <TicTac />
    );

    expect(component.find('Sets').length).toEqual(1);
  });

  it(`should render <Score /> component`, () => {
    const component = shallow(
      <TicTac />
    );

    expect(component.find('Score').length).toEqual(1);
  });
});
