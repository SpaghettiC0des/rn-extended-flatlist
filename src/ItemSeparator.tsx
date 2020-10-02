import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const ItemSeparator: FC<ViewProps> = ({style, ...otherProps}) => (
  <View style={[styles.divider, style]} {...otherProps} />
);

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#b6b6b6',
  },
});
