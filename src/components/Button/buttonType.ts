import { OpaqueColorValue } from 'react-native';
import {
  ElementBackground,
  ElementBorder,
  ElementDimensions,
  ElementHorizontalPadding,
  ElementText,
  ElementTextColor,
  ElementTextSizing,
} from '../types';

type ButtonTextElement = ElementText & ElementHorizontalPadding;

// type ButtonBlockElement = ElementBorder & ElementBackground;
export interface ButtonBlockElement extends ElementBorder, ElementBackground {}

const x: ButtonBlockElement = {
  backgroundColor: OpaqueColorValue,
};

export default interface ButtonType {
  button?: {
    accent?: {
      block?: {
        base?: ButtonBlockElement;
        interactivity?: {
          rest?: ButtonBlockElement;
          hover?: ButtonBlockElement;
          focus?: ButtonBlockElement;
          pressed?: ButtonBlockElement;
          visited?: ButtonBlockElement;
        };
        validation?: {
          disabled?: ButtonBlockElement;
        };
        sizing?: {
          xxxSmall?: ElementDimensions;
          xxSmall?: ElementDimensions;
          xSmall?: ElementDimensions;
          small?: ElementDimensions;
          medium?: ElementDimensions;
          large?: ElementDimensions;
          xLarge?: ElementDimensions;
          xxLarge?: ElementDimensions;
          xxxLarge?: ElementDimensions;
        };
      };
      text: {
        base: ButtonTextElement;
        interactivity?: {
          rest?: ElementTextColor;
          hover?: ElementTextColor;
          focus?: ElementTextColor;
          pressed?: ElementTextColor;
          visited?: ElementTextColor;
        };
        validation?: {
          disabled?: ElementTextColor;
        };
        sizing?: {
          xxxSmall?: ElementTextSizing;
          xxSmall?: ElementTextSizing;
          xSmall?: ElementTextSizing;
          small?: ElementTextSizing;
          medium?: ElementTextSizing;
          large?: ElementTextSizing;
          xLarge?: ElementTextSizing;
          xxLarge?: ElementTextSizing;
          xxxLarge?: ElementTextSizing;
        };
      };
    };
    default?: {
      block?: {
        base?: ButtonBlockElement;
        interactivity?: {
          rest?: ButtonBlockElement;
          hover?: ButtonBlockElement;
          focus?: ButtonBlockElement;
          pressed?: ButtonBlockElement;
          visited?: ButtonBlockElement;
        };
        validation?: {
          disabled?: ButtonBlockElement;
        };
        sizing?: {
          xxxSmall?: ElementDimensions;
          xxSmall?: ElementDimensions;
          xSmall?: ElementDimensions;
          small?: ElementDimensions;
          medium?: ElementDimensions;
          large?: ElementDimensions;
          xLarge?: ElementDimensions;
          xxLarge?: ElementDimensions;
          xxxLarge?: ElementDimensions;
        };
      };
      text: {
        base: ButtonTextElement;
        interactivity?: {
          rest?: ElementTextColor;
          hover?: ElementTextColor;
          focus?: ElementTextColor;
          pressed?: ElementTextColor;
          visited?: ElementTextColor;
        };
        validation?: {
          disabled?: ElementTextColor;
        };
        sizing?: {
          xxxSmall?: ElementTextSizing;
          xxSmall?: ElementTextSizing;
          xSmall?: ElementTextSizing;
          small?: ElementTextSizing;
          medium?: ElementTextSizing;
          large?: ElementTextSizing;
          xLarge?: ElementTextSizing;
          xxLarge?: ElementTextSizing;
          xxxLarge?: ElementTextSizing;
        };
      };
    };
    text?: {
      block?: {
        base?: ButtonBlockElement;
        interactivity?: {
          rest?: ButtonBlockElement;
          hover?: ButtonBlockElement;
          focus?: ButtonBlockElement;
          pressed?: ButtonBlockElement;
          visited?: ButtonBlockElement;
        };
        validation?: {
          disabled?: ButtonBlockElement;
        };
        sizing?: {
          xxxSmall?: ElementDimensions;
          xxSmall?: ElementDimensions;
          xSmall?: ElementDimensions;
          small?: ElementDimensions;
          medium?: ElementDimensions;
          large?: ElementDimensions;
          xLarge?: ElementDimensions;
          xxLarge?: ElementDimensions;
          xxxLarge?: ElementDimensions;
        };
      };
      text: {
        base: ButtonTextElement;
        interactivity?: {
          rest?: ElementTextColor;
          hover?: ElementTextColor;
          focus?: ElementTextColor;
          pressed?: ElementTextColor;
          visited?: ElementTextColor;
        };
        validation?: {
          disabled?: ElementTextColor;
        };
        sizing?: {
          xxxSmall?: ElementTextSizing;
          xxSmall?: ElementTextSizing;
          xSmall?: ElementTextSizing;
          small?: ElementTextSizing;
          medium?: ElementTextSizing;
          large?: ElementTextSizing;
          xLarge?: ElementTextSizing;
          xxLarge?: ElementTextSizing;
          xxxLarge?: ElementTextSizing;
        };
      };
    };
  };
}
