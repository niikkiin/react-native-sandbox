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

### Section 4 Navigation Screens

- Button Types - very simple component for showing a button and detecting a press
- TouchableOpacity - highly customizable component that can detect a press on

  - Example

  ```JSX
  	<Button
  			style={styles.buttonStyles}
  			title='Go to Components Demo'
  			onPress={() => navigation.navigate('Components')}
  		/>

  <TouchableOpacity onPress={() => props.navigation.navigate('Lists')}>
  			<Text>Go to List Demo</Text>
  		</TouchableOpacity>
  ```

### Section 5 Building Reusable Components

- Destructuring props

### Section 6 State Management in React Components

- How to Identify
  - What piece of data is changing in our app?
  - What type of data is it?
  - What is the data's starting (default) value?
- Usage of useState (react hook)
  ```JSX
  const [counter, setCounter] = useState(0);
  ```
- We **never** directly modify a state variable. React donesn't detect this change! Only use the 'setter' function
- We can name the state variable anything we wish
- We can track any kind of data that changes over time - a number, string, array of objects, etc
- When a component is rerendered, all of its children get rerendered too
- A state variable can be passed to a child component! At that point, the state variable is now being used as props

- Reducer

  - function that manages, changes to an object
  - function that gets called with two objects
    - argument #1 - object that has all of our state in it
    - argument #2 - object that describes the update we want to make
  - we look at argument #2 and use it to decide how to change argument #1
  - two technicalities
  - we never change argument #1 directly
  - we must always return a value to be used as argument #1

  ```JSX
   import React, { useReducer } from 'react';

   // ideal to be defined outside component
   const reducer = (state, action) => {
     // state --- { red: number, green: number, blue: number }
     // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
     switch (action.colorToChange) {
       case 'red':
         // dont do this! => state.red = state.red - 15
         return {
           ...state,
           red: state.red + action.amount
         }
      case 'green':
        return {
           ...state,
           green: state.green + action.amount
         }
      case 'blue':
        return {
           ...state,
           blue: state.blue + action.amount
         }
      default:
        return state;
     }
   }
   const COLOR_INCREMENT = 15;

   const Example = () => {
     const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
     //state => { red: 0, green: 0, blue: 0 }
     const {red, green, blue} = state;

     <Button onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}>
   }
  ```

  - community conventions in reducers

    - `{type: 'change_red', payload: 15} // {colorToChange: 'red', amount: 15}`
    - type - string that describes the exact change operation we want to make
    - payload - some data that is critical to the change operation

  - showing a text input

  ```JSX
  import React, {useState} from 'react'
  import { View, Text, TextInput, StyleSheet } from 'react-native';

  const Example = () => {
    const [password,setPassword] = useState('');
    return (
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
    )
  }

  const styles = StyleSheet.create({
    input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1
    }
  })

  export default TextScreen;
  ```

### Section 7 How to Handle Screen Layout

- Layout Systems

  - Box Object Model
    - the height/width of an element + the space around it
    - use this to affect the positioning of a single element
      ![Box Object Model Details 1](assets/box-object-model-1.png)
      ![Box Object Model Details 2](assets/box-object-model-2.png)
      ![Box Object Model Details 3](assets/box-object-model-3.png)
      ![Box Object Model Details 4](assets/box-object-model-4.png)
  - Flex Box

    - how some number of sibling elements get laid out inside a parent
    - use this to position multiple elements with a common parent
      ![Flex Box Model Details 1](assets/flex-box-model-1.png)
      ![Flex Box Model Details 2](assets/flex-box-model-2.png)
      ![Flex Box Model Details 3](assets/flex-box-model-3.png)

  - Position
    - how a single element gets laid out inside of a parent
    - use this to override box object model + flex box
      ![Position Model Details 1](assets/position-model-1.png)

  **Box Object Model Rules**
  ![Box Object Model Rules](assets/box-object-model-rules.png)
