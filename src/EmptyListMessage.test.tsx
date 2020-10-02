import React from 'react';
import {render, RenderAPI} from 'react-native-testing-library';
import {EmptyListMessage, DEFAULT_EMPTY_LIST_MESSAGE} from './EmptyListMessage';

describe('<EmptyListMessage />', () => {
  let rendered: RenderAPI;

  beforeEach(() => {
    rendered = render(<EmptyListMessage />);
  });

  it('should show default message Empty List', () => {
    const {getByA11yLabel} = rendered;

    const actual = getByA11yLabel(DEFAULT_EMPTY_LIST_MESSAGE);

    expect(actual).not.toBeNull();
  });

  it('should accept custom message', () => {
    const {getByA11yLabel, rerender} = rendered;
    rerender(<EmptyListMessage message="Nothing to show" />);

    const actual = getByA11yLabel('Nothing to show');

    expect(actual).not.toBeNull();
  });

  it('should accept custom container style', () => {
    const {toJSON, rerender} = rendered;

    rerender(
      <EmptyListMessage
        containerStyle={{
          backgroundColor: 'red',
        }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should accept custom text style', () => {
    const {toJSON, rerender} = rendered;

    rerender(
      <EmptyListMessage
        textStyle={{
          color: 'yellow',
        }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
