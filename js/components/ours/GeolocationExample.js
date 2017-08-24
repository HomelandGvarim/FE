import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import MapView from 'react-native-maps';
import { Container, Button, H3, Header, Title, Body, Left, Right } from "native-base";

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 31.776723,
      longitude: 35.234485,
      error: null,
      marker: {
        markerCoordinate: null,
        color: '#37BCBB',
        key: 0
      },
      markers: []
    };
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.createMarker = this.createMarker.bind(this);
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.state.marker.markerCoordinate = position.coords;
        this.state.latitude = position.coords.latitude;
        this.state.longitude = position.coords.longitude;
        this.state.marker.key++;
        this.setState(this.state);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
  }

  componentWillMount() {
    this.getCurrentLocation();
  }

  createMarker() {
    this.getCurrentLocation();

    let newMarkers = this.state.markers.slice();
    newMarkers.push(<MapView.Marker
      key={this.state.marker.key}
      coordinate={this.state.marker.markerCoordinate}
      pinColor={this.state.marker.color}
    />);
    this.setState({ markers: newMarkers });
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <MapView style={styles.map}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {this.state.markers}
          </ MapView>
        </View>
        <Button style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
          onPress={() => this.createMarker()}>
          <Text> Add my location </Text>
        </ Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default GeolocationExample;