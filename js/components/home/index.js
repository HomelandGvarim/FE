import React, { Component } from "react";
import { Image, View, StatusBar,TouchableHighlight,TouchableOpacity  } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right ,Toast } from "native-base";

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
					
					</View>
					
						
					
					<View style={{ marginBottom: 80 }}>
						<Button
							style={{ backgroundColor: "#37BCBB", alignSelf: "center" }}
							onPress={() => this.props.navigation.navigate("DrawerOpen")}
						>
							<Text>Go to Settings</Text>
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
