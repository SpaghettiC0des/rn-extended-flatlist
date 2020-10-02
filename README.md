# rn-extended-flatlist

Helps you write better React Native lists. `getItemLayout` is implemented out of the box, with default `ListEmptyComponent` and `ItemSeparatorComponent`.

### Example Usage

```tsx
import React from 'react';
import {Text} from 'react-native';
import {ExtendedFlatList} from 'rn-extended-flatlist';

const MyList = () => (
  <ExtendedFlatList
    data={[1, 2, 3]}
    listItemHeight={100}
    emptyListMessage="Whoops! Nothing to show"
    keyExtractor={(item) => String(item)}
    renderItem={({item}) => <Text style={{height: 100}}>{item}</Text>}
  />
);

export default MyList;
```

### `<ExtendedFlatList />` props

| Props              | Type    | Description                                                         | Default Value |
|--------------------|---------|---------------------------------------------------------------------|---------------|
| emptyListMessage   | string  | Message to show when no items available\.                           | "Empty List"  |
| listItemHeight     | number  | When provided, \`getItemLayout` will be automatically implemented\. | undefined     |
| noItemSeparator    | boolean | Hides \`ItemSeparatorComponent`                                     | false         |
| noEmptyListMessage | boolean | Hides \`ListEmptyComponent`                                         | false         |

### `<EmptyListMessage />` props

| Props              | Type      | Description                               | Default Value |
|--------------------|-----------|-------------------------------------------|---------------|
| message            | string    | Message to show when no items available\. | "Empty List"  |
| textStyle          | TextStyle | Custom style for the message\.            | undefined     |
| containerStyle     | ViewStyle | Custom style for the container\.          | undefined     |

### `<ItemSeparator />` props
The same props as React Native's `<View />`

### `getItemLayout`

A partial function that accepts the `listItemHeight` and returns the function expected by React Native `FlatList`'s `getItemLayout` prop.
 

### TODO

- [ ] Add example snack.
- [ ] `onEndReached` should be debounced.
- [ ] Support dynamic item height.

### License
`rn-extended-flatlist` is MIT licensed, as found in the [LICENSE](/LICENSE) file.