import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyle } from '../../utils/style';

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
  const interactivity = 'rest';

  const style = useStyle('button', type, interactivity, validation, sizing);

  return (
    <TouchableOpacity>
      <View>
        <View>
          <View style={style.block}>
            <Text style={style.text}>{text}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
