import { useCallback } from 'react';
import { ComponentStyle, StyleModifier } from '../components/types';
import styleSchema from '../schemas';
import { componentStyle } from '../components/Button/styles';

export const useStyle = (
  component: string,
  type: string,
  interactivity: string,
  validation: string | undefined,
  sizing: string
): any => {
  return useCallback(
    (element: string) => {
      const style = componentStyle(interactivity, validation, sizing);
      return [style.base[element], style.modifier[type][element]];
    },
    [type, interactivity, validation, sizing]
  );
};

export function setStyle(
  component: string,
  type: string,
  element: string,
  interactivity: string,
  validation: string,
  sizing: string
): any {
  const base = (styleSchema as ComponentStyle)?.[component]?.[type]?.[element];
  return {
    ...base?.base,
    ...(base?.interactivity
      ? base?.interactivity && base?.interactivity[interactivity]
      : {}),
    ...(base?.validation
      ? base?.validation && base?.validation[validation]
      : {}),
    ...(base?.sizing ? base?.sizing && base?.sizing[sizing] : {}),
    // backgroundColor: 'blue',
  };
}
