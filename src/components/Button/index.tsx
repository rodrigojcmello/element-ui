import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { useStyle } from '../../utils/style';
import { InteractiveKeys, SizingKeys, ValidationKeys } from '../types';

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
  const [interactivity] = useState<InteractiveKeys>('rest');

  const validationState = waiting === 'request' ? 'disabled' : validation;

  const style = useStyle(
    'button',
    type,
    interactivity,
    validationState,
    sizing
  );

  return (
    <TouchableHighlight
      style={style.block}
      onPress={onPress}
      disabled={waiting === 'request'}
    >
      <View>
        {waiting === 'request' ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Text style={style.text}>{text}</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Button;
