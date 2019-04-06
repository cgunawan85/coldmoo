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
import Login from './screens/Login';
import News from './screens/News';
import AuthLoading from './screens/AuthLoading';
import {
	Profile, 
	Settings 
} from './screens';
import NavigationService from './services/NavigationService';

class App extends Component {
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
			} else if (routeName === 'Profile') {
				iconName = `ios-star${focused ? '' : '-outline'}`;
			} else if (routeName === 'Settings') {
				iconName = `ios-star${focused ? '' : '-outline'}`;
			}
			return <IconComponent name={iconName} size={25} color={tintColor} />;
		}
	})
}
);

const AppSwitchNavigator = createSwitchNavigator(
{
	AuthLoading: { screen: AuthLoading },
	Login: { screen: Login },
	Dashboard: { screen: DashboardTabNavigator }
},
{
	initialRouteName: 'AuthLoading'
}
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
