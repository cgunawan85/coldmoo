import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Profile extends Component {
	render() {
		return (
			<View style={styles.containerStyle}>
				<Text>Profile!</Text>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export { Profile };
