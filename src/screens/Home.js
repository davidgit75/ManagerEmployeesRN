//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Body, Right, Left } from 'native-base';

// create a component
const Home = () => {
  return (
    <Container>
      <Header>
        <Body>
          <Text>Home</Text>
        </Body>
      </Header>

      <Content>
        <Text>Home</Text>
      </Content>
    </Container>
  );
};

//make this component available to the app
export { Home };
