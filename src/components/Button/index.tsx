import React, { FC, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  animated,
  useSpring,
  useTransition,
  config,
} from 'react-spring/native';
import { useStyle } from '../../utils/style';
import { InteractiveKeys, SizingKeys, ValidationKeys } from '../types';
import Skeleton from '../Skeleton';
import styleSchema from '../../schemas';

interface ButtonProps {
  text: string;
  type: 'accent' | 'default' | 'text';
  sizing?: SizingKeys;
  validation?: ValidationKeys;
  waiting?: 'content' | 'request';

  // TODO: must be required
  onPress?: () => void;
}

const AnimatedView = animated(View);
const AnimatedText = animated(Text);

const Button: FC<ButtonProps> = ({
  text,
  type,
  sizing = 'medium',
  validation,
  waiting,
  onPress,
}) => {
  const [interactivity, setInteractivity] = useState<InteractiveKeys>('rest');
  const [blockBackground, setBlockBackground] = useState<ColorValue>();
  const [textColor, setTextColor] = useState<ColorValue>();
  const validationState = waiting === 'request' ? 'disabled' : validation;

  const style = useStyle(
    'button',
    type,
    interactivity,
    validationState,
    sizing
  );

  const transition = useTransition(waiting === 'request', {
    from: { position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const blockAnim = useSpring({
    to: {
      backgroundColor: blockBackground,
    },
    config: config.gentle,
  });

  const textAnim = useSpring({
    to: {
      color: textColor,
    },
    config: config.gentle,
  });

  useEffect(() => {
    const validationColor =
      validationState &&
      styleSchema?.button?.[type]?.block?.validation?.[validationState]
        ?.backgroundColor;

    const interactivityColor =
      styleSchema?.button?.[type]?.block?.interactivity?.[interactivity]
        ?.backgroundColor;

    setBlockBackground(validationColor || interactivityColor);
  }, [type, interactivity, validationState]);

  useEffect(() => {
    const validationColor =
      validationState &&
      styleSchema?.button?.[type]?.text?.validation?.[validationState]?.color;

    const interactivityColor =
      styleSchema?.button?.[type]?.text?.interactivity?.[interactivity]?.color;

    setTextColor(validationColor || interactivityColor);
  }, [type, interactivity, validationState]);

  const height = styleSchema?.button?.[type]?.block?.sizing?.[sizing]?.height;
  const minWidth =
    styleSchema?.button?.[type]?.block?.sizing?.[sizing]?.minWidth;
  const borderRadius = styleSchema?.button?.[type]?.block?.base?.borderRadius;

  return (
    <>
      {waiting === 'content' ? (
        <Skeleton
          height={height}
          width={minWidth}
          borderRadius={borderRadius}
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',
          }}
        >
          <AnimatedView style={[blockAnim]}>
            <Pressable
              style={style.block}
              onPress={onPress}
              disabled={waiting === 'request'}
              accessibilityRole="button"
            >
              {({ hovered, pressed }) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useEffect(() => {
                  setInteractivity(
                    // eslint-disable-next-line unicorn/no-nested-ternary
                    pressed ? 'pressed' : hovered ? 'hover' : 'rest'
                  );
                }, [hovered, pressed]);

                return transition((style, item) => {
                  return item ? (
                    <AnimatedView style={style}>
                      <ActivityIndicator color="#0078d4" />
                    </AnimatedView>
                  ) : (
                    <AnimatedText style={[style.text, style, textAnim]}>
                      {text}
                    </AnimatedText>
                  );
                });
              }}
            </Pressable>
          </AnimatedView>
        </View>
      )}
    </>
  );
};

export default Button;
