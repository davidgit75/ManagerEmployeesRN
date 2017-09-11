//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Body, Right, Left } from 'native-base';

// create a component
const Test = () => {
  return (
    <Container>
    <Header>
      <Body>
        <Text>Test</Text>
      </Body>
    </Header>

    <Content>
      <Text>Test</Text>
    </Content>
  </Container>
  );
};

//make this component available to the app
export { Test };
