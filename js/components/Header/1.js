import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";

import styles from "./styles";

class Header1 extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Hey</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Button onPress={() => console.log("hi")}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Header1;
