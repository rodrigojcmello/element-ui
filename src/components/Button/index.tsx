import React, { FC, useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useStyle } from '../../utils/style';
import { InteractiveKeys, SizingKeys, ValidationKeys } from '../types';
import Skeleton from '../Skeleton';

interface ButtonProps {
  text: string;
  type: 'accent' | 'default' | 'text';
  sizing?: SizingKeys;
  validation?: ValidationKeys;
  waiting?: 'content' | 'request';

  // TODO: must be required
  onPress?: () => void;
}

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

  return (
    <>
      {waiting === 'content' ? (
        <Skeleton height={50} width={220} borderRadius={2} />
      ) : (
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
              <Text style={style.text}>{text}</Text>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;
