import React, { Component } from "react";
import GeolocationExample from './GeolocationExample';

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
  Text,
  Subtitle
} from "native-base";

import styles from "../Header/styles";

class Header9 extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#37BCBB" }}
          androidStatusBarColor="#37BCBB"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: "#FFF" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#FFF" }}>Geo Location</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <GeolocationExample />
        </Content>
      </Container>
    );
  }
}

export default Header9;
