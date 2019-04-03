import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { LOGO } from '../images';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onRegisterButtonPress() {
		console.log(this.props.password);
	}

	render() {
		return (
			<Card>
				<Image source={LOGO} style={styles.logoStyle} />
				<CardSection>
					<Input 
						labelText="Email" 
						placeholder="cold@moo.com" 
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input 
						labelText="Password" 
						placeholder="secret password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
						secureTextEntry
					/>
				</CardSection>

				<CardSection style={{ borderBottomWidth: 0 }}>
					<Button onPress={this.onRegisterButtonPress.bind(this)}>Register</Button>
				</CardSection>

				<CardSection style={{ borderBottomWidth: 0, borderTopWidth: 0 }}>
						<View style={{ flex: 1, alignItems: 'center' }}>
							<Text>Already have an account?</Text>
							<Text onPress={() => console.log('test')} style={{ color: 'blue' }}>
								Sign in
							</Text>
						</View>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	logoStyle: {
		width: 200,
		height: 200,
		alignSelf: 'center',
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
