import React, { useState } from 'react';

import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
	const [color, setColor] = useState([]);
	return (
		<View>
			<Button title='Add a new color' onPress={() => setColor([...color, randomRGB()])} />

			<FlatList
				keyExtractor={(item) => item}
				data={color}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>;
				}}
			/>
		</View>
	);
};

const randomRGB = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
