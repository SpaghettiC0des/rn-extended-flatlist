import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {EmptyListMessageProps} from './types';

export const DEFAULT_EMPTY_LIST_MESSAGE = 'Empty List';

export const EmptyListMessage: FC<EmptyListMessageProps> = ({
  message = DEFAULT_EMPTY_LIST_MESSAGE,
  textStyle,
  containerStyle,
}) => (
  <View style={[styles.defaultContainer, containerStyle]}>
    <Text
      style={[styles.defaultText, textStyle]}
      accessible
      accessibilityLabel={message}>
      {message}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 16,
  },
});
