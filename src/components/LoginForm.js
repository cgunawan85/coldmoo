import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { LOGO } from '../images';
import { emailChanged, passwordChanged, registerUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onRegisterButtonPress() {
		this.props.registerUser({ email: this.props.email, password: this.props.password });
	}

	renderRegisterButtonOrSpinner() {
		if (this.props.loading) {
			return <Spinner />;
		} 
		return <Button onPress={this.onRegisterButtonPress.bind(this)}>Register</Button>;
	}

	renderErrorMessage() {
		if (this.props.error) {
			return (
				<Text style={{ fontSize: 18, color: 'red' }}>{this.props.error}</Text>
			);
		}
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
						{this.renderErrorMessage()}
				</CardSection>

				<CardSection style={{ borderBottomWidth: 0 }}>
					{this.renderRegisterButtonOrSpinner()}
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
		password: state.auth.password,
		loading: state.auth.loading,
		error: state.auth.error
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, registerUser })(LoginForm);
