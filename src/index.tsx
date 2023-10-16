import { View, Text } from "react-native";
import React from "react";
import Storage from "@react-native-async-storage/async-storage";

const App = () => {
	const isFirstTime = async () => {
		const isFirstTime: string | null = await Storage.getItem("@app.isFirstTime");
		return isFirstTime === "true";
	};

	return (
		<View>
			<Text>index</Text>
		</View>
	);
};

export default App;
