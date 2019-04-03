import React from 'react';
import { Text, View, TextInput } from 'react-native';

function Input(props) {
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{props.labelText}</Text>
			<TextInput
				placeholder={props.placeholder}
				style={inputStyle}
				value={props.value}
				onChangeText={props.onChangeText}
				autocorrect={false}
				secureTextEntry={props.secureTextEntry}
			/>
		</View>
	);
}

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		paddingBottom: 5
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
