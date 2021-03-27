import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// components
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

// hooks
import useResults from '../hooks/useResults';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchAPI, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<View style={styles.containerStyle}>
			<SearchBar onTermChange={setTerm} onTermSubmit={() => searchAPI(term)} placeholder='Search' term={term} />
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			{/* <Text style={styles.resultStyle}>We have found {results.length} results</Text> */}
			<ScrollView>
				<ResultsList 
				results={filterResultsByPrice('$')} title='Cost Effective' />
				<ResultsList 
				results={filterResultsByPrice('$$')} title='Bit Pricier' />
				<ResultsList
				results={filterResultsByPrice('$$$')} title='Bit Spender' />
				<ResultsList
				results={filterResultsByPrice('$$$$')} title='Best Spender' />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		marginLeft: 15,
		flex: 1,
	},
	resultStyle: {
		marginVertical: 5,
	},
});

export default SearchScreen;
