import { StyleSheet } from 'react-native';
import { setStyle } from '../../utils/style';
import { RNStyle } from '../types';

type ValidationKeys = 'warning' | 'error' | 'success' | 'disabled';

type ValidationStyle = {
  [attribute in ValidationKeys]: RNStyle;
};

export const componentStyle = {
  base: StyleSheet.create({
    block: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
    text: {
      fontSize: 14,
      lineHeight: 20,
    },
  }),
  modifier: {
    accent: {
      block: StyleSheet.create(setStyle('button', 'accent', 'block')),
      text: StyleSheet.create(setStyle('button', 'accent', 'text')),
    },
    default: {
      block: StyleSheet.create(setStyle('button', 'default', 'block')),
      text: StyleSheet.create(setStyle('button', 'default', 'text')),
    },
    text: {
      block: StyleSheet.create(setStyle('button', 'text', 'block')),
      text: StyleSheet.create(setStyle('button', 'text', 'text')),
    },
  },
};
