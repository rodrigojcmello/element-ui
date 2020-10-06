import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { ComponentStyle } from '../components/types';
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
    [component, type, interactivity, validation, sizing]
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
  const styleElement = (styleSchema as ComponentStyle)?.[component]?.[type]?.[
    element
  ];
  return {
    ...styleElement?.base,
    ...(styleElement?.interactivity
      ? styleElement?.interactivity &&
        styleElement?.interactivity[interactivity]
      : {}),
    ...(styleElement?.validation
      ? styleElement?.validation && styleElement?.validation[validation]
      : {}),
    ...(styleElement?.sizing
      ? styleElement?.sizing && styleElement?.sizing[sizing]
      : {}),
  };
}
