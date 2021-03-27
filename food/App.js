import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// screens
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		ResultsShow: ResultsShowScreen
	},
	{
		initialRouteName: 'Search',
		defaultNAvigationOptions: {
			title: 'FoodKart',
		},
	}
);

export default createAppContainer(navigator);
// 8 8
