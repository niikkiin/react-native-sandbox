import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result: { name, image_url, rating, review_count } }) => {
	// const { name } = result;
	return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: image_url}} />
			<Text style={styles.nameStyle}>{name}</Text>
      <Text style={styles.ratingStyle}>{rating} Stars, {review_count} Reviews</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 4
  },
  nameStyle: {
    fontWeight: 'bold'
  },
  ratingStyle: {
    marginBottom: 10
  }
});

export default ResultsDetail;
