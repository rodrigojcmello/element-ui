import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ComponentStyle, StyleModifier } from '../components/types';
import styleSchema from '../schemas';
import { base } from '../components/Button/styles';

const buttonElements = ['block', 'text'];

export const useStyle = (
  component: string,
  type: string,
  interactivity: string,
  validation: string | undefined,
  sizing: string
): any => {
  return useCallback(
    (element: string) => {
      const elements = {};

      buttonElements.forEach((element_) => {
        elements[element_] = setStyle(
          component,
          type,
          element_,
          interactivity,
          validation,
          sizing
        );
      });
      const style = StyleSheet.create(elements);

      return [base[element], style[element]];
    },
    [type, interactivity, validation, sizing]
  );
};

export function setStyle(
  component: string,
  type: string,
  element: string,
  interactivity: string,
  validation: string | undefined,
  sizing: string
): any {
  const base2 = (styleSchema as ComponentStyle)?.[component]?.[type]?.[element];
  const x = {
    ...base2?.base,
    ...(base2?.interactivity
      ? base2?.interactivity && base2?.interactivity[interactivity]
      : {}),
    ...(base2?.validation
      ? base2?.validation && base2?.validation[validation]
      : {}),
    ...(base2?.sizing ? base2?.sizing && base2?.sizing[sizing] : {}),
    // backgroundColor: 'blue',
  };
  return x;
}
