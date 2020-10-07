import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyle } from '../../utils/style';
import { InteractiveKeys } from '../types';

interface ButtonProps {
  text: string;
  type: 'accent' | 'default' | 'text';
  sizing?:
    | 'xxxSmall'
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge'
    | 'xxxLarge';
  validation?: 'warning' | 'error' | 'success' | 'disabled';
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  sizing = 'medium',
  validation,
}) => {
  const [interactivity] = useState<InteractiveKeys>('rest');

  const style = useStyle('button', type, interactivity, validation, sizing);

  return (
    <TouchableOpacity style={style.block}>
      <View>
        <Text style={style.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
