/**
 * A partial function that accepts the `listItemHeight`.
 *
 * ### Sample Usage
 * ```tsx
 * import {getItemLayout} from 'rn-extended-flatlist'
 *
 * <FlatList getItemLayout={getItemLayout(160)}/>
 *
 *
 * ```
 * @param listItemHeight number
 */
export const getItemLayout = <T>(listItemHeight: number) => (
  _: T[] | null | undefined,
  index: number,
) => ({
  index,
  length: listItemHeight,
  offset: index * listItemHeight,
});
