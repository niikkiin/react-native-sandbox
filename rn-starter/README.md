### Section 1 Getting Started

- To setup:
  - Install packages using `npm i`
  - Run the project using `expo start`

### Section 2 Working with Content

- Text component in `react-native`

  - component to wrap texts

  ```JSX
  import React from 'react';

  import { Text, View } from 'react-native';

  const ComponentsScreen = () => {
    return (
      <View>
        <Text>Getting started with react native!</Text>
      </View>
    );
  };
  ```

- Stylesheet component in `react-native`

  - component to add basic styling

  ```JSX
  import React from 'react';

  import { Text, StyleSheet, View } from 'react-native';

  const ComponentsScreen = () => {
  const name = 'Nikki';
  return (
  	<View>
  		<Text style={styles.textStyleTwo}>My name is {name}</Text>
  	</View>
  );
  };

  const styles = StyleSheet.create({
   textStyleTwo: {
     fontSize: 20,
   },
  });
  ```

- To show our screen in the app

  - import path to `App.js`
  - Stack navigator is a little object that decides what content shows in a screen

  ```JSX
  import { createStackNavigator, createAppContainer } from 'react-navigation';
  import HomeScreen from './src/screens/HomeScreen';
  import ComponentsScreen from './src/screens/ComponentScreen';

  const navigator = createStackNavigator(
  {
    Home: HomeScreen, // Home is the navigator name
    Components: ComponentsScreen,
  },
  {
    initialRouteName: 'Home', //should have same spelling with the navigator name
    defaultNavigationOptions: {
      title: 'App'
    }
  }
  );

  export default createAppContainer(navigator);

  ```

  - `<Text/>` component is a 'primitive' React element used to show some basic content on the screen
  - `appNavigator` in `App.js` file is a tool from the library called 'React Navigation' that is used to show different screens to the user
  - The `StyleSheet.create()` function validates a set of styling rules that we pass into it and we can use it or pass styling directly into an element

  - Primitive Elements

    - `<Text />` show some text to the user. Any text placed outside of a `Text` will result in an error
    - `<View />` is a general purpose lemeent used for grouping other elemenets or styling
    - `<Image />` show an image
    - `<Button />` show a button the user can press and gives us some feedback whenever the user presses it.

  - Rules of JSX
  - We can assemble different JSX elements like normal HTML
  - We can configure different JSX element using 'props'
  - We can refer to JS variables inside of a JSX block by using curly braces
  - Ww can assign JSX elements to a variable, then show that variable inside of a JSX block

### Section 3 List Building with Style

- FlatList element
- Turns an array into a list of elements
- We are required to pass in a 'props' of 'data' - the array of data that we are going to create a bunch of elements out of
- Also required to pass in a 'renderItem' prop - function that will turn each individual item into an element
- If you are coming from React on the web, you might be used to 'mapping' an array of data to build a list - FlatList is better with React Native
- `keyExtractor` prop is essential
- `horizontal` prop - to make the list be horizontally availble and to be scrolled horizontally, by default it is false
- `showsHorizontalScrollIndicator` prop - show/remove horizontal scroll indicator
- Example

  ```JSX
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

  const Example = () => {
    return (

      <FlatList
  			keyExtractor={(friend) => friend.name}
  			data={friends}
  			showsHorizontalScrollIndicator={false}
  			renderItem={({ item }) => {
          // element === { item: { name: 'Fiend#1'}, index: 0}
  				const { name, age } = item;
  				return (
  					<Text style={styles.textStyles}>
  						{name} - Age {age}
  					</Text>
  				);
  			}}
  		/>
    )
  }

  ```
