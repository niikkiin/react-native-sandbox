import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

// icons
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation: { navigate } }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
	return (
		<View>
			<Text>IndexScreen</Text>
			<Button title='Add Post' onPress={() => addBlogPost()} />
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigate('Show', { id: item.id })}>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather name='trash' style={styles.icon} />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation: { navigate } }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigate('Create')}>
				<Feather style={styles.navigationIcon} name='plus' size={30} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		// borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: 'gray',
		paddingHorizontal: 10,
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	},
	navigationIcon: {
		marginRight: 10,
	},
});

export default IndexScreen;
