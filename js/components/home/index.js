import React, { Component } from "react";
<<<<<<< HEAD
import { Image, View, StatusBar } from "react-native";
import GeolocationExample from '../ours/GeolocationExample';
import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";
=======
import { Image, View, StatusBar,TouchableHighlight,TouchableOpacity  } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right ,Toast } from "native-base";
>>>>>>> 6027e4131f26899250c706f57db3329a6703d46d

import styles from "./styles";


const launchscreenBg = require("../../../img/gray-background.png");
const launchscreenLogo = require("../../../img/ShieldLogo.png");
const thumbsDownButton = require("../../../img/thumbs-down-icon.png");
const thumbsUpButton = require("../../../img/thumbs-up-button.png");

let notOklogo = {
    left:30,
    top:0,
    width: 100,
    height: 100
    
  }
  let oklogo= {
    left:  60,
    top:  0 ,
    width: 100,
    height: 100
  }




class Home extends Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			oklogo: oklogo,
			notOklogo:notOklogo
		}
	}
	 _onOkButtonClick(){
		 Toast.show({
                text: "Wrong password!",
                buttonText: "Okay"
              });
	//ToastAndroid.showWithGravity("You are Ok!",2,ToastAndroid.BOTTOM);
	Toast.show({
		text:"You are Ok!",
		type:"success",
		duration:2000
	})
	this.test()
 }

 _onNotOkButtonClick(){
	  Toast.show({
		text:"SOS Sent to followers!",
		type:"danger",
		duration:2000,
		position:'bottom'
	})
	this.test()

 }
 test(){
	
 }
 
	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
				
					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
					</View>
<<<<<<< HEAD
					<View
						style={{
							alignItems: "center",
							marginBottom: 50,
							backgroundColor: "transparent",
						}}
					>
						<H3 style={styles.text}>App to showcase</H3>
						
						<View style={{ marginTop: 8 }} />
						<H3 style={styles.text}>NativeBase components</H3>
						<View style={{ marginTop: 8 }} />
=======
					<View style={styles.logoContainer}>
					
						<Container>
							<TouchableOpacity   onPress={()=>{this._onOkButtonClick()}} underlayColor={'transparent'}  >
								<Image style={this.state.oklogo} source={thumbsUpButton} />
							</TouchableOpacity>
						</Container>
					
						<Container>
							<TouchableOpacity    onPress={()=>{this._onNotOkButtonClick()}}  underlayColor={'transparent'} >
								<Image style={this.state.notOklogo} source={thumbsDownButton}/>
							</TouchableOpacity>
						</Container>
					
>>>>>>> 6027e4131f26899250c706f57db3329a6703d46d
					</View>
					
						
					
					<View style={{ marginBottom: 80 }}>
						<Button
							style={{ backgroundColor: "#37BCBB", alignSelf: "center" }}
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
<<<<<<< HEAD
							<Text>Lets Go! MatanL</Text>
=======
							<Text>Go to Settings</Text>
>>>>>>> 6027e4131f26899250c706f57db3329a6703d46d
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
