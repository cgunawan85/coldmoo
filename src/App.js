import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { 
	createSwitchNavigator, 
	createAppContainer, 
	createBottomTabNavigator
} from 'react-navigation';
import { Root } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from '@firebase/app';
import reducers from './reducers';
import WelcomeScreen from './screens/WelcomeScreen';
import {   
	News, 
	Profile, 
	Settings 
} from './screens';
import NavigationService from './services/NavigationService';

class App extends Component {
	componentDidMount() {
		const config = {
			apiKey: 'AIzaSyAKxev7irkEQqBtFG2n2asiJmENNRr-WvQ',
			authDomain: 'coldmoo-f07a2.firebaseapp.com',
			databaseURL: 'https://coldmoo-f07a2.firebaseio.com',
			projectId: 'coldmoo-f07a2',
			storageBucket: 'coldmoo-f07a2.appspot.com',
			messagingSenderId: '78980425142'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Root>
					<AppContainer 
						ref={navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
					}}
					/>
				</Root>
			</Provider>
		);
	}
}

const DashboardTabNavigator = createBottomTabNavigator({
	News,
	Profile,
	Settings
},
{
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			const IconComponent = Ionicons;
			let iconName;
			if (routeName === 'News') {
				iconName = `ios-star${focused ? '' : '-outline'}`;
			}
			return <IconComponent name={iconName} size={25} color={tintColor} />;
		}
	})
}
);

const AppSwitchNavigator = createSwitchNavigator({
	Welcome: { screen: WelcomeScreen },
	Dashboard: { screen: DashboardTabNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
