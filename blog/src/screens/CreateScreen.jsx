import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// context
import { Context } from '../context/BlogContext';

const CreateScreen = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { addBlogPost } = useContext(Context);
	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
      style={styles.input} />
			<Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(content) => setContent(content)}
      style={styles.input} />
      <Button
        style={styles.button} 
        title="Add Blog Post"
        onPress={() => addBlogPost(title, content)}
      />
		</View>
	);
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: 'white',
    padding: 10,
    margin: 10
  },
  label: {
    marginLeft: 10,
    marginTop: 10
  },
  button: {
    margin: 10
  }
});

export default CreateScreen;
