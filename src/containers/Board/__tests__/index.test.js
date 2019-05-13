import React       from 'react';
import { shallow } from 'enzyme';

import Board from '../';

describe('<Board />', () => {
  it(`should render 'Step Back' button`, () => {
    const component = shallow(
      <Board
        squares={[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}
      />
    );

    expect(component.find('Board__Button').first().text()).toEqual('Step Back');
  });

  it(`should render 'Step Forward' button`, () => {
    const component = shallow(
      <Board
        squares={[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}
      />
    );

    expect(component.find('Board__Button').last().text()).toEqual('Step Forward');
  });

  it(`should render nine Squares`, () => {
    const component = shallow(
      <Board
        squares={[[0, 0, 0], [0, 0, 0], [0, 0, 0]]}
      />
    );

    expect(component.find('Square').length).toBe(9);
  });
});
