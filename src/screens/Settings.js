import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Settings extends Component {
	render() {
		return (
			<View style={styles.containerStyle}>
				<Text>Settings!</Text>
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

export { Settings };
