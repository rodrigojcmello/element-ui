import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { modifier, defaultStyle } from './styles';

interface ButtonProps {
  text: string;
  type: 'accent' | 'default' | 'text';
  size?:
    | 'xxxSmall'
    | 'xxSmall'
    | 'xSmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xLarge'
    | 'xxLarge'
    | 'xxxLarge';
}

const Button: FC<ButtonProps> = ({ text, type, size = 'medium' }) => {
  const [focus, setFocus] = useState(false);

  return (
    <TouchableOpacity
      onFocus={(): void => setFocus(true)}
      onBlur={(): void => setFocus(false)}
    >
      <View>
        <View>
          <View
            style={[
              defaultStyle.block,
              modifier[type].block.base,
              modifier[type].block.rest,
              modifier[type].block[size],
            ]}
          >
            <Text
              style={[
                defaultStyle.text,
                modifier[type].text.base,
                modifier[type].text.rest,
                modifier[type].text[size],
              ]}
            >
              123{text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
