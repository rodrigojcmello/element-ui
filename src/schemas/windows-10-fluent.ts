// import ButtonType from '../components/Button/buttonType';
import { ComponentStyle } from '../components/types';

// type Components = ButtonType;
type Components = ComponentStyle;

const styleSchema: Components = {
  button: {
    accent: {
      loader: {
        validation: {
          disabled: { color: '#000000' },
        },
      },
      block: {
        base: {
          borderRadius: 2,
        },
        interactivity: {
          rest: { backgroundColor: '#0078d4' },
          hover: { backgroundColor: '#429CE3' },
          focus: {},
          pressed: {
            backgroundColor: '#005A9E',
          },
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {
            height: 32,
            minWidth: 120,
          },
          large: {},
          xLarge: {
            height: 48,
            minWidth: 280,
          },
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: { backgroundColor: '#C6C6C6' },
        },
      },
      text: {
        base: {
          // fontFamily: 'Segoe UI',
          // fontWeight: 400,
          fontSize: 14,
          lineHeight: 20,
          paddingLeft: 10,
          paddingRight: 10,
        },
        interactivity: {
          rest: { color: '#FFFFFF' },
          hover: {},
          focus: {},
          pressed: { color: '#FFFFFF' },
          visited: {},
        },
        validation: {
          disabled: { color: '#FFFFFF' },
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {},
          large: {},
          xLarge: {
            fontSize: 20,
            lineHeight: 24,
          },
          xxLarge: {},
          xxxLarge: {},
        },
      },
    },
    default: {
      block: {
        base: {
          borderRadius: 2,
        },
        interactivity: {
          rest: { backgroundColor: '#C6C6C6' },
          hover: { backgroundColor: '#DFDFDF' },
          focus: { backgroundColor: '#C6C6C6' },
          pressed: { backgroundColor: '#959595' },
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {
            height: 32,
            minWidth: 120,
          },
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: {},
        },
      },
      text: {
        base: { lineHeight: 20, fontSize: 14 },
        interactivity: {
          rest: { color: '#000000' },
          hover: {},
          focus: {},
          pressed: {},
          visited: {},
        },
        validation: {
          disabled: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {},
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
      },
    },
    text: {
      block: {
        base: { borderRadius: 2 },
        interactivity: {
          rest: {},
          hover: {},
          focus: {},
          pressed: {},
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {
            height: 32,
            minWidth: 120,
          },
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: {},
        },
      },
      text: {
        base: { lineHeight: 20, fontSize: 14, textDecorationLine: 'underline' },
        interactivity: {
          rest: { color: '#0078D4' },
          hover: { color: '#636363' },
          focus: {},
          pressed: { color: '#959595' },
          visited: {},
        },
        sizing: {
          xxxSmall: {},
          xxSmall: {},
          xSmall: {},
          small: {},
          medium: {},
          large: {},
          xLarge: {},
          xxLarge: {},
          xxxLarge: {},
        },
        validation: {
          disabled: {},
        },
      },
    },
  },
};

export default styleSchema;
