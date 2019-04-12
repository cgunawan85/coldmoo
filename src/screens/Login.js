import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Container, Content, Form, H1, Item, Input, Label, Spinner, StyleProvider } from 'native-base';
import { LOGO } from '../images';
import { emailChanged, passwordChanged, registerUser, loginUser } from '../actions';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

class Login extends Component {
    static navigationOptions = {
        header: null
    }

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onLoginButtonPress() {
		this.props.loginUser({ email: this.props.email, password: this.props.password });
	}

	renderLoginButtonOrSpinner() {
		if (this.props.loading) {
			return <Spinner />;
		}
		return ( 
			<Button
				onPress={this.onLoginButtonPress.bind(this)} 
				light 
				large 
				style={styles.buttonStyle}
			>
				<Text>Login</Text>
			</Button>
		);
	}

	render() {
		const { 
			containerStyle, 
			logoStyle, 
			buttonContainerStyle, 
			registerTextStyle, 
			buttonStyle 
		} = styles;

		const { email, password } = this.props;

		return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<Content style={containerStyle}>
						<Image source={LOGO} style={logoStyle} />
						<H1 style={{ textAlign: 'center' }}>Welcome back!</H1>
						<Form>
							<Item stackedLabel>
								<Label>Email</Label>
								<Input
									onChangeText={this.onEmailChange.bind(this)}
									value={email} 
								/>
							</Item>
							<Item stackedLabel last>
								<Label>Password</Label>
								<Input 
									secureTextEntry
									onChangeText={this.onPasswordChange.bind(this)}
									value={password} 
								/>
							</Item>
							<View style={buttonContainerStyle}>
								{this.renderLoginButtonOrSpinner()}
								<Text style={registerTextStyle}>Don't have an account yet?</Text>
								<Button
									success 
									large 
									style={buttonStyle}
									onPress={() => this.props.navigation.navigate('Register')}
								>
									<Text style={{ color: 'white' }}>Register Here</Text>
								</Button>				
							</View>
						</Form>
					</Content>
				</Container>
			</StyleProvider>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		backgroundColor: '#F9DEBC'
	},
	logoStyle: {
		width: 200,
		height: 200,
		alignSelf: 'center',
	},
	buttonContainerStyle: {
		paddingTop: 25
	},
	buttonStyle: {
		alignSelf: 'center',
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'brown',
		borderWidth: 0.2
	},
	registerTextStyle: {
		textAlign: 'center',
		paddingTop: 15,
		paddingBottom: 15
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		loading: state.auth.loading,
		error: state.auth.error,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, { 
	emailChanged, 
	passwordChanged, 
	registerUser,
	loginUser
})(Login);
