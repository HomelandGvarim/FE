import React, { Component } from "react";
import { Image, View, StatusBar,TouchableHighlight } from "react-native";

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
	 this.setState({
		 oklogo: {
    	left:  70,
    	top:  0 ,
    	width: 80,
    	height: 80
  		}
	 })
	 setTimeout(()=>{
		this.setState({
				oklogo: oklogo
			})
	 },70)
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
 }

 _onNotOkButtonClick(){
	 this.setState({
		 notOklogo: {
    	left:  30,
    	top:  0 ,
    	width: 80,
    	height: 80
  		}
	 })
	 setTimeout(()=>{
		this.setState({
				notOklogo: notOklogo
			})
	 },70)
	 //ToastAndroid.showWithGravity("Sent Location!",2,1)

	  Toast.show({
		text:"SOS Sent to followers!",
		type:"danger",
		duration:2000,
		position:'bottom'
	})
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
							<TouchableHighlight   onPress={()=>{this._onOkButtonClick()}} underlayColor={'transparent'}  >
								<Image style={this.state.oklogo} source={thumbsUpButton} />
							</TouchableHighlight>
						</Container>
					
						<Container>
							<TouchableHighlight   onPress={()=>{this._onNotOkButtonClick()}}  underlayColor={'transparent'} >
								<Image style={this.state.notOklogo} source={thumbsDownButton}/>
							</TouchableHighlight>
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
