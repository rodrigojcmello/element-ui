import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  ComponentStyle,
  InteractiveKeys,
  RNStyle,
  SizingKeys,
  ValidationKeys,
} from '../components/types';
import styleSchema from '../schemas';
import { base } from '../components/Button/styles';

const buttonElements = ['block', 'text'];

export const useStyle = (
  component: string,
  type: string,
  interactivity: InteractiveKeys,
  validation: ValidationKeys | undefined,
  sizing: SizingKeys
): any => {
  return useMemo(() => {
    const elements = {};
    buttonElements.forEach((element) => {
      elements[element] = {
        ...base[element],
        ...setStyle(
          component,
          type,
          element,
          interactivity,
          validation,
          sizing
        ),
      };
    });
    return StyleSheet.create(elements);
  }, [component, type, interactivity, validation, sizing]);
};

export function setStyle(
  component: string,
  type: string,
  element: string,
  interactivity: InteractiveKeys,
  validation: ValidationKeys | undefined,
  sizing: SizingKeys
): RNStyle {
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
      ? styleElement?.validation &&
        validation &&
        styleElement?.validation[validation]
      : {}),
    ...(styleElement?.sizing
      ? styleElement?.sizing && styleElement?.sizing[sizing]
      : {}),
  };
}
