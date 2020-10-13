import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { ValidationKeys } from './src/components/types';

const App: FC = () => {
  const [validation, setValidation] = useState<ValidationKeys>();

  const [waiting, setWaiting] = useState<'request' | undefined>();

  useEffect(() => {
    setTimeout(() => {
      setValidation('disabled');
    }, 1000);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWaiting();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [waiting]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Types</Text>
        </View>
        <Button
          type="accent"
          text="accent 2 fa;ods jfaosd ijfaosd ifja;sdof j"
          validation={validation}
          waiting="content"
        />
        <Button
          type="accent"
          text="accent 2"
          onPress={(): void => {
            setWaiting('request');
          }}
          waiting={waiting}
        />
        <Button
          type="default"
          text="default"
          onPress={(): void => {
            setWaiting('request');
          }}
          waiting={waiting}
        />
        <Button type="text" text="text 2" />
        <View>
          <Text>Size</Text>
        </View>
        <Button
          type="accent"
          text="accent 123"
          // sizing="small"
          waiting="content"
        />
        <Button type="default" text="default" sizing="medium" />
        <View style={{ margin: 30 }}>
          <Button
            type="accent"
            text="text"
            sizing="xLarge"
            onPress={(): void => {
              setWaiting('request');
            }}
            waiting="content"
          />
        </View>

        <View style={style.block}>
          <Text style={style.text}>Oi</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    minWidth: 120,
  },
  text: {
    fontWeight: 'normal',
    color: '#ffffff',
  },
});

export default App;
