import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { animated, useSpring } from 'react-spring/native';
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
  const [pressIn, setPressIn] = useState<boolean>(false);
  const [blockBackground, setBlockBackground] = useState<string>();
  const [textColor, setTextColor] = useState<string>();
  const validationState = waiting === 'request' ? 'disabled' : validation;

  const style = useStyle(
    'button',
    type,
    interactivity,
    validationState,
    sizing
  );

  useEffect(() => {
    if (pressIn) {
      setInteractivity('pressed');
    } else {
      setInteractivity('rest');
    }
  }, [pressIn]);

  const blockAnim = useSpring({
    backgroundColor: blockBackground,
  });

  const textAnim = useSpring({
    color: textColor,
  });

  useEffect(() => {
    const validationColor =
      styleSchema?.button[type]?.block?.validation[validationState]
        ?.backgroundColor;

    const interactivityColor =
      styleSchema?.button[type]?.block?.interactivity[interactivity]
        ?.backgroundColor;

    setBlockBackground(validationColor || interactivityColor);
  }, [interactivity, validationState]);

  useEffect(() => {
    const validationColor =
      styleSchema?.button[type]?.text?.validation[validationState]?.color;

    const interactivityColor =
      styleSchema?.button[type]?.text?.interactivity[interactivity]?.color;

    setTextColor(validationColor || interactivityColor);
  }, [interactivity, validationState]);

  return (
    <>
      {waiting === 'content' ? (
        <Skeleton height={50} width={220} borderRadius={2} />
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'flex-start',
          }}
        >
          <AnimatedView style={blockAnim}>
            <TouchableOpacity
              style={style.block}
              onPress={onPress}
              onPressIn={(): void => {
                setPressIn(true);
              }}
              onPressOut={(): void => {
                setPressIn(false);
              }}
              disabled={waiting === 'request'}
              accessibilityRole="button"
              activeOpacity={1}
            >
              <View>
                {waiting === 'request' ? (
                  <ActivityIndicator color="#0078d4" />
                ) : (
                  <AnimatedText style={[style.text, textAnim]}>
                    {text}
                  </AnimatedText>
                )}
              </View>
            </TouchableOpacity>
          </AnimatedView>
        </View>
      )}
    </>
  );
};

export default Button;
