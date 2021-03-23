import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/image-detail.component';

// image
import image1 from '../../assets/forest.jpg';
import image2 from '../../assets/beach.jpg';
import image3 from '../../assets/mountain.jpg';

const ImageScreen = () => {
	return (
		<View>
			<Text>Image Screen</Text>
			<ImageDetail title="Forest" imageSource={image1} imageScore={9} />
			<ImageDetail title="Beach" imageSource={image2} imageScore={7} />
			<ImageDetail title="Mountain" imageSource={image3} imageScore={10} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
