import React, { FC, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import {
  ActivityIndicator,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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

const AnimatedView = animated(View);

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
  const [waitingContent, setWaitingContent] = useState<boolean>(false);
  const [buttonDimensions, setButtonDimensions] = useState<number>({
    width: 0,
    height: 0,
  });

  const validationState = waiting === 'request' ? 'disabled' : validation;

  useEffect(() => {
    setTimeout(() => {
      setWaitingContent(true);
    }, 1000);
  }, []);

  const props = useSpring({
    to: {
      position: 'absolute',
      left: buttonDimensions.width,
    },
    from: {
      position: 'absolute',
      left: buttonDimensions.width * -1,
    },
    config: {
      duration: 1200,
    },
    loop: true,
  });

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

  const onLayout = (event: LayoutChangeEvent): void => {
    const { width, height } = event.nativeEvent.layout;
    setButtonDimensions({ width, height });
  };

  return (
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
      onLayout={onLayout}
    >
      {waiting === 'content' ? (
        <View
          style={{
            ...buttonDimensions,
            backgroundColor: '#f0eef0',
            borderRadius: 2,
          }}
        >
          <AnimatedView style={props}>
            <LinearGradient
              colors={['#f0eef0', '#d9d9d9', '#f0eef0']}
              start={[0, 1]}
              end={[1, 0]}
            >
              <View style={[x.skeleton, buttonDimensions]} />
            </LinearGradient>
          </AnimatedView>
        </View>
      ) : (
        // </View>
        <View>
          {waiting === 'request' ? (
            <ActivityIndicator color="#0078d4" />
          ) : (
            <Text style={style.text}>{text}</Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const x = StyleSheet.create({
  skeleton: {
    // backgroundColor: 'red',
    height: '100%',
  },
});

export default Button;
