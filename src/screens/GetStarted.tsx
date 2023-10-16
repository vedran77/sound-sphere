import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GetStarted = () => {
	return (
		<View>
			<LinearGradient colors={["#6AF2F0", "#059DC0"]} />
			<Text>Get Started</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//   backgroundColor: line
	},
});

export default GetStarted;
