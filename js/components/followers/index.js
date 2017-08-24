import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Image,
  View,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  SwipeRow,
  Right,
  Body
} from "native-base";

import styles from "./styles";

const pratik = require("../../../img/contacts/pratik.png");
const sanket = require("../../../img/contacts/sanket.png");
const megha = require("../../../img/contacts/megha.png");
const atul = require("../../../img/contacts/atul.png");
const saurabh = require("../../../img/contacts/saurabh.png");
const varun = require("../../../img/contacts/varun.png");
const BlueV = require("../../../img/BlueV.png");
const RedX = require("../../../img/RedX.png");

const datas = [
  {
    img: pratik,
    name: "Itamar"
  },
  {
    img: sanket,
    name: "Kumar Sanket"
  },
  {
    img: megha,
    name: "Megha"
  },
  {
    img: atul,
    name: "Atul Ranjan"
  },
  {
    img: saurabh,
    name: "Saurabh Sahu"
  },
  {
    img: varun,
    name: "Varun Sahu"
  }
];

class Followers extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Following</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar onPress={() => {}}>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>
                    {data.name}
                  </Text>
                </Body>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default Followers;
