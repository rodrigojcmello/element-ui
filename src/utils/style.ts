import { ComponentStyle, StyleModifier } from '../components/types';
import styleSchema from '../schemas';

export function setStyle(
  component: string,
  type: string,
  element: string
): StyleModifier {
  const base = (styleSchema as ComponentStyle)?.[component]?.[type]?.[element];

  return {
    // Base --------------------------------------------------------------------

    base: base?.base || {},

    // Interactivity -----------------------------------------------------------

    rest: base?.interactivity?.rest || {},
    hover: base?.interactivity?.hover || {},
    focus: base?.interactivity?.focus || {},
    pressed: base?.interactivity?.pressed || {},
    visited: base?.interactivity?.visited || {},

    // Validation --------------------------------------------------------------

    warning: base?.validation?.warning || {},
    error: base?.validation?.error || {},
    success: base?.validation?.success || {},
    disabled: base?.validation?.disabled || {},

    // Sizing ------------------------------------------------------------------

    xxxSmall: base?.sizing?.xxxSmall || {},
    xxSmall: base?.sizing?.xxSmall || {},
    xSmall: base?.sizing?.xSmall || {},
    small: base?.sizing?.small || {},
    medium: base?.sizing?.medium || {},
    large: base?.sizing?.large || {},
    xLarge: base?.sizing?.xLarge || {},
    xxLarge: base?.sizing?.xxLarge || {},
    xxxLarge: base?.sizing?.xxxLarge || {},
  };
}
