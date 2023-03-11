import React from 'react';
import Screens from './screens';
// import { Text, View, Image, StyleSheet } from 'react-native';
import { Text, View, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
`;
const H1 = styled.Text`
  font-size: 48px;
  font-weight: bold;
`;
const P = styled.Text`
  margin: 24px 0;
  font-size: 18px;
`;

/* 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 18,
  },
});
 */

const Main = () => {
  /* Исполльзуем свойство style для стилизации компонентов
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#0077cc', fontSize: 48, fontWeight: 'bold' }}>
        Hello world!
      </Text>
      <Image source={require('../assets/images/hello-world.jpg')} />
    </View>
  ); 
  */

  /* Используем иблиотеку React Native  для стилизации компонентов
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hello world!</Text>
      <Text style={styles.paragraph}>This is my app</Text>
      <Image source={require('../assets/images/hello-world.jpg')} />
    </View>
  ); 
  */

  /* 
  return (
    <StyledView>
      <H1>Hellow world!</H1>
      <P>This is my app</P>
      <Image source={require('../assets/images/hello-world.jpg')} />
    </StyledView>
  );
  */

  return <Screens />;
};

export default Main;
