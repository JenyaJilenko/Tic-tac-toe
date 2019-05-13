import React       from 'react';
import { shallow } from 'enzyme';

import Message from '../';

describe('<Message />', () => {
  it(`should render 'Game Over!' text`, () => {
    const component = shallow(
      <Message
        gameover={true}
        draw={false}
      />
    );

    expect(component.text()).toEqual('Game Over!');
  });

  it(`should render 'Draw' text`, () => {
    const component = shallow(
      <Message
        gameover={true}
        draw={true}
      />
    );

    expect(component.text()).toEqual('Draw');
  });

  it(`should render 'New Game' text`, () => {
    const component = shallow(
      <Message
        gameover={false}
        draw={false}
      />
    );

    expect(component.text()).toEqual('New Game');
  });
});
