import { StyleSheet } from 'react-native';
import { setStyle } from '../../utils/style';

export const componentStyle = (
  interactivy: string,
  validation: string | undefined,
  sizing: string
): any => {
  return {
    base: {
      block: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
      },
      text: {
        fontSize: 14,
        lineHeight: 20,
      },
    },
    modifier: {
      accent: StyleSheet.create({
        block: setStyle(
          'button',
          'accent',
          'block',
          interactivy,
          validation,
          sizing
        ),
        text: setStyle(
          'button',
          'accent',
          'text',
          interactivy,
          validation,
          sizing
        ),
      }),
      default: StyleSheet.create({
        block: setStyle(
          'button',
          'default',
          'block',
          interactivy,
          validation,
          sizing
        ),
        text: setStyle(
          'button',
          'default',
          'text',
          interactivy,
          validation,
          sizing
        ),
      }),
      text: StyleSheet.create({
        block: setStyle(
          'button',
          'text',
          'block',
          interactivy,
          validation,
          sizing
        ),
        text: setStyle(
          'button',
          'text',
          'text',
          interactivy,
          validation,
          sizing
        ),
      }),
    },
  };
};
