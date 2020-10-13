import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import {
  BaseStyle,
  ComponentStyle,
  InteractiveKeys,
  RNStyle,
  SizingKeys,
  ValidationKeys,
} from '../components/types';
import styleSchema from '../schemas';
import { base } from '../components/Button/style';

const buttonElements = ['block', 'text', 'loader'];

export function useStyle(
  component: string,
  type: string,
  interactivity: InteractiveKeys,
  validation: ValidationKeys | undefined,
  sizing: SizingKeys
): BaseStyle {
  return useMemo(() => {
    const elements: BaseStyle = {};
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
      delete elements[element].backgroundColor;
      delete elements[element].color;
    });
    return StyleSheet.create(elements);
  }, [component, type, interactivity, validation, sizing]);
}

export function setStyle(
  component: string,
  type: string,
  element: string,
  interactivity: InteractiveKeys,
  validation: ValidationKeys | undefined,
  sizing: SizingKeys
): RNStyle {
  const styleElement = styleSchema?.[component]?.[type]?.[element];
  return {
    ...styleElement?.base,
    ...styleElement?.interactivity?.[interactivity],
    ...(validation && styleElement?.validation?.[validation]),
    ...styleElement?.sizing?.[sizing],
  };
}
