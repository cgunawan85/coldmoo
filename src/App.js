import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { 
	createSwitchNavigator, 
	createAppContainer, 
	createDrawerNavigator,
	createBottomTabNavigator,
	createStackNavigator
} from 'react-navigation';
import { Icon } from 'native-base';
import firebase from '@firebase/app';
import reducers from './reducers';
import { 
	WelcomeScreen, 
	DashboardScreen, 
	Feed, 
	Profile, 
	Settings 
} from './screens';

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
				<AppContainer />
			</Provider>
		);
	}
}

const DashboardTabNavigator = createBottomTabNavigator({
	Feed,
	Profile,
	Settings
},
{
	navigationOptions: ({ navigation }) => {
		const { routeName } = navigation.state.routes[navigation.state.index];
		return {
			headerTitle: routeName
		};
	}
}
);

const DashboardStackNavigator = createStackNavigator({
	DashboardTabNavigator: DashboardTabNavigator
},
{
	defaultNavigationOptions: ({ navigation }) => {
		return {
			headerLeft: (
				<Icon 
					android="md-menu"
					ios='ios-menu'
					style={{ paddingLeft: 10 }}
					onPress={() => navigation.openDrawer()}
				/>
			)
		};
	}
}
);

const AppDrawerNavigator = createDrawerNavigator({
	Dashboard: {
		screen: DashboardStackNavigator
	}
});

const AppSwitchNavigator = createSwitchNavigator({
	Welcome: { screen: WelcomeScreen },
	Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
