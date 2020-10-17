import React, { FC, useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import { animated, config, useSpring } from 'react-spring/native';

// const AnimatedView = animated(View);
const AnimatedText = animated(Text);

const TextField: FC = () => {
  const [text, setText] = useState('');
  const [focus, setFocus] = useState(false);

  const top = focus ? -7 : 12;
  const left = focus ? 5 : 9;
  const fontSize = focus ? 12 : 16;

  const labelAnim = useSpring({
    to: {
      position: 'absolute',
      // backgroundColor: 'white',
      paddingRight: 4,
      paddingLeft: 4,
      top,
      left,
      fontSize
    },
    // config: config.gentle,
  });

  return (
    <View style={[style.block]}>
      <View style={{ position: 'relative' }}>
        <AnimatedText style={[labelAnim]}>label</AnimatedText>
        <TextInput
          value={text}
          style={style.input}
          autoCapitalize={'none'}
          blurOnSubmit
          onChangeText={(value): void => {
            setText(value);
          }}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            if (!text) setFocus(false);
          }}
          onEndEditing={() => {
            if (!text) setFocus(false);
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  block: {
    alignSelf: 'flex-start',
    overflow: 'hidden',
    paddingTop: 10,
    minWidth: 200
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    height: 42,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16
  },
});

export default TextField;
