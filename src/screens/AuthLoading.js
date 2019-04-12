import React, { Component } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View
} from 'react-native';
import firebase from '@firebase/app';

require('firebase/auth');

class AuthLoading extends Component {
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
		firebase.auth().onAuthStateChanged((user) => { 
			this.props.navigation.navigate(user ? 'Dashboard' : 'Auth');
		});
	}

	render() {
		return (
			<View style={styles.activityIndicatorContainerStyle}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
			);
	}
}

const styles = {
	activityIndicatorContainerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export default AuthLoading;
