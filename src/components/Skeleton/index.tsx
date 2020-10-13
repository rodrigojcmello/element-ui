import React, { FC } from 'react';
import { animated, useSpring } from 'react-spring/native';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  height?: number | string;
  width?: number | string;
  borderRadius?: number | string;
}

const AnimatedView = animated(View);

const Skeleton: FC<ButtonProps> = ({
  width = 10,
  height = 10,
  borderRadius = 0,
}) => {
  const props = useSpring({
    to: {
      left: width,
    },
    from: {
      left: Number(width) * -1,
    },
    config: {
      duration: 1200,
    },
    loop: true,
  });

  return (
    <View
      style={{
        width,
        height,
        backgroundColor: '#f0eef0',
        borderRadius,
        overflow: 'hidden',
      }}
    >
      <AnimatedView style={props}>
        <LinearGradient
          colors={['#f0eef0', '#d9d9d9', '#f0eef0']}
          start={[0, 0]}
          end={[1, 0]}
        >
          <View style={{ width, height }} />
        </LinearGradient>
      </AnimatedView>
    </View>
  );
};

export default Skeleton;
