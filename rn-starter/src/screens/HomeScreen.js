import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>My First React Native</Text>
			<Button
				style={styles.buttonStyles}
				title='Go to Components Demo'
				onPress={() => navigation.navigate('Components')}
			/>
			<Button style={styles.buttonStyles} title='Go to List Demo' onPress={() => navigation.navigate('Lists')} />
			<Button
				style={styles.buttonStyles}
				title='Go to Image Demo'
				onPress={() => navigation.navigate('Images')}
			/>
			<Button
				style={styles.buttonStyles}
				title='Go to Counter Demo'
				onPress={() => navigation.navigate('Counters')}
			/>
			<Button
				style={styles.buttonStyles}
				title='Go to Color Demo'
				onPress={() => navigation.navigate('Colors')}
			/>
			<Button
				style={styles.buttonStyles}
				title='Go to Square Color Demo'
				onPress={() => navigation.navigate('Squares')}
			/>
			<Button
				style={styles.buttonStyles}
				title='Go to Square Text Demo'
				onPress={() => navigation.navigate('Texts')}
			/>
			<Button
				style={styles.buttonStyles}
				title='Go to Boxes Demo'
				onPress={() => navigation.navigate('Boxes')}
			/>
			{/* <TouchableOpacity onPress={() => props.navigation.navigate('Lists')}>
				<Text>Go to List Demo</Text>
			</TouchableOpacity> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
	buttonStyles: {
		marginTop: 5,
		marginVertical: 30,
	},
});

export default HomeScreen;
