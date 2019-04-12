import React from 'react';
import { Modal, Text, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

function RegisterModal({ visible, onAccept, onDecline }) {
	const { containerStyle, textStyle, cardSectionStyle } = styles;

	return (
		<Modal
			visible={visible}
			transparent
			animationType='slide'
			onRequestClose={() => {}}
		>
			<View style={containerStyle}>
				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>
						Register
					</Text>
				</CardSection>

				<CardSection style={cardSectionStyle}>
					<Text style={textStyle}>
						Form goes here
					</Text>
				</CardSection>

				<CardSection>
					<Button onPress={onAccept}>Confirm</Button>
					<Button onPress={onDecline}>Cancel</Button>
				</CardSection>
			</View>
		</Modal>
	);
}

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	}
};

export { RegisterModal };
