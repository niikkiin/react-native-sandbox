import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// navigation
import { withNavigation } from 'react-navigation';

// components
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation: { navigate } }) => {

	if(!results.length) {
		return null;
	}
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => 
							navigate('ResultsShow', { id: item.id })
							}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginVertical: 5,
	},
	containerStyle: {
		marginBottom: 10,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		marginLeft: 15
	},
});

export default withNavigation(ResultsList);
