import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import {styles} from './Button.style';
import theme from '@/theme';

type Props = PropsWithChildren<{
  children: string;
  style?: ViewStyle;
  variant: 'text' | 'contained' | 'outlined';
  onPress?: any;
}>;

const Button = ({children, variant, ...props}: Props) => {
  const stylesRoot = () => {
    switch (variant) {
      case 'text':
        return {};
      case 'contained':
        return {
          backgroundColor: 'green',
        };
      default:
        return {
          border: '2px solid red',
        };
    }
  };
  const stylesText = () => {
    switch (variant) {
      case 'text':
        return {
          color: theme.palette.primary.main,
        };
      case 'contained':
        return {
          color: theme.palette.primary.light,
        };
      default:
        return {
          color: theme.palette.primary.main,
        };
    }
  };

  return (
    <TouchableOpacity {...props} style={[{...stylesRoot()}, styles.root]}>
      <View>
        <Text style={[{...stylesText()}]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
