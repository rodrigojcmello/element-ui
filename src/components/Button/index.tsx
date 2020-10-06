import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStyle } from '../../utils/style';

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
  validation?: 'warning' | 'error' | 'success' | 'disabled';
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  size = 'medium',
  validation,
}) => {
  // const [focus, setFocus] = useState(false);

  const style = useStyle('button', type, validation, size);

  return (
    <TouchableOpacity
    // onFocus={(): void => setFocus(true)}
    // onBlur={(): void => setFocus(false)}
    >
      <View>
        <View>
          <View style={style('block')}>
            <Text style={style('text')}>{text}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
