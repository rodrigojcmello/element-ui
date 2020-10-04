import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type RNStyle = ViewStyle & TextStyle & ImageStyle;

// -----------------------------------------------------------------------------
// Border
// -----------------------------------------------------------------------------

type BorderKeys =
  | 'borderRadius'
  | 'borderWidth'
  | 'borderStyle'
  | 'borderColor';

export type ElementBorder = Pick<RNStyle, BorderKeys>;

// -----------------------------------------------------------------------------
// Background
// -----------------------------------------------------------------------------

export type ElementBackground = Pick<RNStyle, 'backgroundColor'>;

// -----------------------------------------------------------------------------
// Dimensions
// -----------------------------------------------------------------------------

export interface ElementDimensions {
  height?: number;
  minWidth?: number;
}

export interface ElementTextColor {
  color?: string;
}

export interface ElementTextSizing extends ElementTextColor {
  fontSize?: number;
  lineHeight?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export interface ElementHorizontalPadding {
  paddingLeft?: number;
  paddingRight?: number;
}

export interface ElementText extends ElementTextColor, ElementTextSizing {
  fontFamily?: string;
  fontStyle?: 'italic';
  textDecorationLine?: 'underline' | 'overline' | 'line-through';
}

// -----------------------------------------------------------------------------
// Schema
// -----------------------------------------------------------------------------

// Interactive -----------------------------------------------------------------

type InteractiveKeys = 'rest' | 'hover' | 'focus' | 'pressed' | 'visited';

type InteractiveStyle = {
  [attribute in InteractiveKeys]: RNStyle;
};

// Sizing ----------------------------------------------------------------------

type SizingKeys =
  | 'xxxSmall'
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge';

type SizingStyle = {
  [attribute in SizingKeys]: RNStyle;
};

// Validation ----------------------------------------------------------------------

type ValidationKeys = 'warning' | 'error' | 'success' | 'disabled';

type ValidationStyle = {
  [attribute in ValidationKeys]: RNStyle;
};

// Element ---------------------------------------------------------------------

interface ElementModifiers {
  base?: RNStyle;
  interactivity?: Partial<InteractiveStyle>;
  sizing?: Partial<SizingStyle>;
  validation?: Partial<ValidationStyle>;
}

type ElementStyle = {
  [attribute in string]: Partial<ElementModifiers>;
};

// Type ------------------------------------------------------------------------

type TypeStyle = {
  [attribute in string]: Partial<ElementStyle>;
};

// Component -------------------------------------------------------------------

export type ComponentStyle = {
  [attribute in string]: Partial<TypeStyle>;
};

// -----------------------------------------------------------------------------
// StyleModifier
// -----------------------------------------------------------------------------

type StyleKeys =
  | 'base'
  | 'rest'
  | 'hover'
  | 'focus'
  | 'pressed'
  | 'visited'
  | 'warning'
  | 'error'
  | 'success'
  | 'disabled'
  | 'xxxSmall'
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge';

export type StyleModifier = {
  [attribute in StyleKeys]: RNStyle;
};
