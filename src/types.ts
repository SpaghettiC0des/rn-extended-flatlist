import {
  StyleProp,
  TextStyle,
  ViewStyle,
  FlatListProps as RNFlatListProps,
} from 'react-native';

export type EmptyListMessageProps = {
  /**
   * Message to show when list is empty
   * @default "Empty List"
   */
  message?: string;

  /**
   * Ignored when passing `TextComponent` prop
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Ignored when passing `ViewComponent` prop
   */
  containerStyle?: StyleProp<ViewStyle>;
};

export interface ExtendedFlatListProps<ItemT> extends RNFlatListProps<ItemT> {
  /**
   * @default "Empty List"
   */
  emptyListMessage?: string;

  /**
   * When provided, `getItemLayout` will be automatically implemented.
   */
  listItemHeight?: number;

  /**
   * Hides `ItemSeparatorComponent`
   * @default false
   */
  noItemSeparator?: boolean;

  /**
   * Hides `ListEmptyComponent`
   * @default false
   */
  noEmptyListMessage?: boolean;
}
