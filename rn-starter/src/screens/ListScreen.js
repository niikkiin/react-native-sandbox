import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
	const friends = [
		{
			name: 'Friend#1',
			age: 20,
		},
		{
			name: 'Friend#2',
			age: 45,
		},
		{
			name: 'Friend#3',
			age: 32,
		},
		{
			name: 'Friend#4',
			age: 27,
		},
		{
			name: 'Friend#5',
			age: 30,
		},
	];
	return (
		<View>
			<Text>List</Text>
			{/* <FlatList 
        data={friends}
        keyExtractor={(friend) => friend.name}
        renderItem={(friend) => <Text>{friend.name}</Text>}
      /> */}
			<FlatList
				keyExtractor={(friend) => friend.name}
				data={friends}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => {
					const { name, age } = item;
					return (
						<Text style={styles.textStyles}>
							{name} - Age {age}
						</Text>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyles: {
		marginTop: 20,
	},
});

export default ListScreen;
