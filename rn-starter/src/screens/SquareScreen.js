import React, { useReducer } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/color-counter.component';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
	const { type, payload } = action;
	const { red, green, blue } = state;
	switch (type) {
		case 'CHANGE_RED':
			return red + payload > 255 || red + payload < 0
				? state 
				: { ...state, red: red + payload };
		case 'CHANGE_GREEN':
			return green + payload > 255 || green + payload < 0 
				? state 
				: { ...state, green: green + payload };
		case 'CHANGE_BLUE':
			return blue + payload > 255 || blue + payload < 0 
				? state
				: { ...state, blue: blue + payload };
		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

	const { red, green, blue } = state;
	// const setColor = (color, change) => {
	// 	switch (color) {
	// 		case 'red':
	// 			red + change > 255 || red + change < 0 ? null : setRed(red + change);
	// 			return;
	// 		case 'green':
	// 			green + change > 255 || green + change < 0 ? null : setGreen(green + change);
	// 			return;
	// 		case 'blue':
	// 			blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
	// 			return;
	// 	}
	// };

	return (
		<View>
			<ColorCounter
				color='Red'
				onIncrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'CHANGE_RED', payload: -1 * COLOR_INCREMENT })}
			/>
			<ColorCounter
				onIncrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'CHANGE_GREEN', payload: -1 * COLOR_INCREMENT })}
				color='Green'
			/>
			<ColorCounter
				onIncrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'CHANGE_BLUE', payload: -1 * COLOR_INCREMENT })}
				color='Blue'
			/>
			<Text>Your color:</Text>
			<View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
			<Text>{red}</Text>
			<Text>{green}</Text>
			<Text>{blue}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
