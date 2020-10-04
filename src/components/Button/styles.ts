import { StyleSheet } from 'react-native';
import { setStyle } from '../../utils/style';

export const defaultStyle = StyleSheet.create({
  buttonContainer: {
    padding: 3,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: -3,
  },
  buttonContainer2: {
    padding: 1,
    justifyContent: 'center',
    alignSelf: 'flex-start',
    margin: -1,
  },
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export const modifier = {
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
};
