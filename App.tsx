import React, { FC } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';

const App: FC = () => {
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
          validation="disabled"
        />
        <Button
          type="accent"
          text="accent 2 fa;ods jfaosd ijfaosd ifja;sdof j"
        />
        <Button type="default" text="default 2" />
        <Button type="text" text="text 2" />
        <View>
          <Text>Size</Text>
        </View>
        <Button type="accent" text="accent" sizing="small" />
        <Button type="default" text="default" sizing="medium" />
        <Button type="accent" text="text" sizing="xLarge" />
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
