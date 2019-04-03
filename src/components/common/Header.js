import React from 'react';
import { Text, View } from 'react-native';

function Header(props) {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	);
}

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		paddingTop: 24,
		paddingBottom: 24,
		elevation: 5,
		position: 'relative'
	},

	textStyle: {
		fontSize: 20,
	}
};

export { Header };
