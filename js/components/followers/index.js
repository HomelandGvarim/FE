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
    text: "Itamar",
    note: "I'm ok, :)",
    time: "3:43 pm",
    isOk: true
  },
  {
    img: sanket,
    text: "Kumar Sanket",
    note: "Every thing is ok..",
    time: "1:12 pm",
    isOk: true
  },
  {
    img: megha,
    text: "Megha",
    note: "There is no issues :)",
    time: "10:03 am",
    isOk: true
  },
  {
    img: atul,
    text: "Atul Ranjan",
    note: "Dont worry!!",
    time: "5:47 am",
    isOk: true
  },
  {
    img: saurabh,
    text: "Saurabh Sahu",
    note: "I need help",
    time: "11:11 pm",
    isOk: false
  },
  {
    img: varun,
    text: "Varun Sahu",
    note: "Help me",
    time: "8:54 pm",
    isOk: false
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
            <Title>List Avatar</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <SwipeRow
                rightOpenValue={-75}
                right={
                  <Button danger onPress={() => alert("Poke")}>
                    <Icon active name="trash" />
                  </Button>
                }
                body={
                  <View style={{ flexDirection: "row" }}>
                    <Left
                      style={{ alignSelf: "flex-start", flexDirection: "row" }}
                    >
                      <Thumbnail small source={data.img} />
                      <Text numberOfLines={1} note>
                        {data.isOk
                          ? <Thumbnail small source={BlueV} />
                          : <Thumbnail small source={RedX} />}
                        {data.note}
                      </Text>
                    </Left>

                    <Right style={{ alignSelf: "flex-end" }}>
                      <Text note>
                        {data.time}
                      </Text>
                    </Right>
                  </View>
                }
              />}
          />
        </Content>
      </Container>
    );
  }
}

export default Followers;
