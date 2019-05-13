import React       from 'react';
import { shallow } from 'enzyme';

import Square from '../Square';

describe('<Square />', () => {
  it(`should render a 'O' content if value 1`, () => {
    const component = shallow(
      <Square value={1} />
    );

    expect(component.text()).toEqual('O');
  });

  it(`should render a 'X' content if value 2`, () => {
    const component = shallow(
      <Square value={2} />
    );

    expect(component.text()).toEqual('X');
  });

  it('should render a disabled square if value not 1 or 2', () => {
    const component = shallow(
      <Square gameover={true} />
    );

    expect(component.prop('disabled')).toEqual(true);
  });

  it('should handle click events', () => {
    const movePlayer = jest.fn();
    const component = shallow(
      <div>
        <Square
          gameover={false}
          onClick={movePlayer}
          col={1}
          row={2}
        />
      </div>
    );

    component.find('Square').simulate('click');

    expect(movePlayer).toHaveBeenCalled();
  });
});
