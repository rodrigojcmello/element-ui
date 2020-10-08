import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyle } from '../../utils/style';
import { InteractiveKeys, SizingKeys, ValidationKeys } from '../types';

interface ButtonProps {
  text: string;
  type: 'accent' | 'default' | 'text';
  sizing?: SizingKeys;
  validation?: ValidationKeys;
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
