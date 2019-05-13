import React       from 'react';
import { shallow } from 'enzyme';

import Score from '../';

describe('<Score />', () => {
  it(`should render 'Score' text`, () => {
    const component = shallow(
      <Score />
    );

    expect(component.find('Score__Text').text()).toEqual('Score');
  });

  it(`should render count of 'O' wins`, () => {
    const component = shallow(
      <Score
        nought={5}
      />
    );

    expect(component.find('Score__Nought').text()).toEqual('O: 5 ');
  });

  it(`should render count of 'X' wins`, () => {
    const component = shallow(
      <Score
        cross={10}
      />
    );

    expect(component.find('Score__Cross').text()).toEqual('X: 10');
  });
});
