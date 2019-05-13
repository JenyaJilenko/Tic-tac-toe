import React       from 'react';
import { shallow } from 'enzyme';

import Sets from '../';

describe('<Sets />', () => {
  it(`should render a count of played sets`, () => {
    const component = shallow(
      <Sets sets={3} />
    );

    expect(component.find('Sets__Played').text()).toEqual('SETS: 3');
  });

  it('should handle resetGame() by click event', () => {
    const resetGame = jest.fn();
    const component = shallow(
      <Sets
        resetGame={resetGame}
      />
    );

    component.find('Sets__Reset').simulate('click');

    expect(resetGame).toHaveBeenCalled();
  });
});
