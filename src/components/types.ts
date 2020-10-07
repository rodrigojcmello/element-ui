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

type DimensionsKeys = 'height' | 'minWidth' | 'borderStyle' | 'borderColor';

export type ElementDimensions = Pick<RNStyle, DimensionsKeys>;

// -----------------------------------------------------------------------------
// Text Color
// -----------------------------------------------------------------------------

export type ElementTextColor = Pick<RNStyle, 'color'>;

// -----------------------------------------------------------------------------
// Text Sizing
// -----------------------------------------------------------------------------

type TextSizingKeys = 'fontSize' | 'lineHeight' | 'fontWeight';

export type ElementTextSizing = Pick<RNStyle, TextSizingKeys>;

// -----------------------------------------------------------------------------
// Horizontal Padding
// -----------------------------------------------------------------------------

type HorizontalPaddingKeys = 'paddingLeft' | 'paddingRight';

export type ElementHorizontalPadding = Pick<RNStyle, HorizontalPaddingKeys>;

// -----------------------------------------------------------------------------
// Text
// -----------------------------------------------------------------------------

type TextKeys = 'fontFamily' | 'fontStyle' | 'textDecorationLine';

export type ElementText = Pick<RNStyle, TextKeys>;

// -----------------------------------------------------------------------------
// Schema
// -----------------------------------------------------------------------------

// Interactive -----------------------------------------------------------------

export type InteractiveKeys =
  | 'rest'
  | 'hover'
  | 'focus'
  | 'pressed'
  | 'visited';

type InteractiveStyle = {
  [attribute in InteractiveKeys]?: RNStyle;
};

// Sizing ----------------------------------------------------------------------

export type SizingKeys =
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

// Validation ------------------------------------------------------------------

export type ValidationKeys = 'warning' | 'error' | 'success' | 'disabled';

type ValidationStyle = {
  [attribute in ValidationKeys]: RNStyle;
};

// Element ---------------------------------------------------------------------

interface ElementModifiers {
  base?: RNStyle;
  interactivity?: InteractiveStyle;
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
