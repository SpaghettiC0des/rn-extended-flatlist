import React from 'react';
import {RenderAPI, render} from 'react-native-testing-library';
import {DEFAULT_EMPTY_LIST_MESSAGE} from './EmptyListMessage';
import {ExtendedFlatListProps} from './types';
import {ExtendedFlatList} from './ExtendedFlatList';
import {Text} from 'react-native';

describe('<EmptyListMessage />', () => {
  let rendered: RenderAPI;
  const props: ExtendedFlatListProps<void> = {
    data: [],
    renderItem: () => null,
  };

  beforeEach(() => {
    rendered = render(<ExtendedFlatList {...props} />);
  });

  it('should show default empty list message', () => {
    const actual = rendered.getAllByA11yLabel(DEFAULT_EMPTY_LIST_MESSAGE);

    expect(actual).not.toBeNull();
  });

  it('should render items correctly', () => {
    const {rerender, getByA11yLabel} = rendered;
    const fakeItems = [1, 2, 3];

    rerender(
      <ExtendedFlatList
        data={fakeItems}
        keyExtractor={(item) => String(item)}
        renderItem={({item}) => (
          <Text accessible accessibilityLabel={String(item)}>
            {item}
          </Text>
        )}
      />,
    );

    fakeItems.forEach((item) => {
      expect(getByA11yLabel(String(item))).not.toBeNull();
    });
  });

  it('should render items correctly when listItemHeight is provided', () => {
    const {rerender, getByA11yLabel} = rendered;
    const fakeItems = [1, 2, 3];

    rerender(
      <ExtendedFlatList
        listItemHeight={100}
        data={fakeItems}
        keyExtractor={(item) => String(item)}
        renderItem={({item}) => (
          <Text
            accessible
            accessibilityLabel={String(item)}
            style={{height: 100}}>
            {item}
          </Text>
        )}
      />,
    );

    fakeItems.forEach((item) => {
      expect(getByA11yLabel(String(item))).not.toBeNull();
    });
  });
});
