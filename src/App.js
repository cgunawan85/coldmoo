import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from '@firebase/app';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
		const store = createStore(reducers, {});
		return (
			<Provider store={store}>
			<LoginForm />
			</Provider>
		);
	}
}

export default App;
