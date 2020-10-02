import React, {PureComponent} from 'react';
import {FlatList as RNFlatList, StyleSheet} from 'react-native';
import {EmptyListMessage} from './EmptyListMessage';
import {ExtendedFlatListProps} from './types';
import {ItemSeparator} from './ItemSeparator';

export class ExtendedFlatList<ItemT> extends PureComponent<
  ExtendedFlatListProps<ItemT>
> {
  render() {
    const {
      contentContainerStyle,
      ListEmptyComponent,
      ItemSeparatorComponent,
      noItemSeparator,
      noEmptyListMessage,
      emptyListMessage,
      ...props
    } = this.props;

    let listEmptyComponent = ListEmptyComponent;
    let itemSeparatorComponent = ItemSeparatorComponent;

    if (listEmptyComponent === undefined) {
      listEmptyComponent = <EmptyListMessage message={emptyListMessage} />;
    }

    if (itemSeparatorComponent === undefined) {
      itemSeparatorComponent = ItemSeparator;
    }

    return (
      <RNFlatList
        {...props}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        ItemSeparatorComponent={noItemSeparator ? null : itemSeparatorComponent}
        ListEmptyComponent={noEmptyListMessage ? null : listEmptyComponent}
      />
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});
