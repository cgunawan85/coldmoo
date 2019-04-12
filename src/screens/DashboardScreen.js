import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DashboardScreen extends Component {
	render() {
		return (
			<View style={styles.containerStyle}>
				<Text>Dashboard</Text>
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

export { DashboardScreen };
