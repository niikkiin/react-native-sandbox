import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

// icon
import { Feather } from '@expo/vector-icons';

function SearchBar({ term, onTermChange, onTermSubmit }) {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder='Search'
				value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginRight: 15,
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15,
	},
	inputStyle: {
		borderColor: 'black',
		fontSize: 18,
		flex: 1,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
		marginVertical: 10
	},
});

export default SearchBar;
