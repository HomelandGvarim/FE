import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Container, Button, H3, Header, Title, Body, Left, Right } from "native-base";

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  render() {
    return (
      <Container>
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
          <Button
            style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
            onPress={() => this.getCurrentLocation()}
          >
            <Text>Lets Go! MatanL</Text>
          </Button>
        </View>

      </Container>
    );
  }
}

export default GeolocationExample;