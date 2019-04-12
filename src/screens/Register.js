import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { 
	Button, 
	Input, 
	Form, 
	Item, 
	Label, 
	Container, 
	Content, 
	Spinner 
} from 'native-base';
import { registerUser, emailChanged, passwordChanged } from '../actions';

class Register extends Component {
	static navigationOptions = {
		title: 'Register',
		headerStyle: {
			backgroundColor: '#F9DEBC'
		}
	};

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onRegisterButtonPress() {
		this.props.registerUser({ 
			email: this.props.email, 
			password: this.props.password 
		});
	}

	renderRegisterButtonOrSpinner() {
		if (this.props.loading) {
			return <Spinner />;
		}
		return ( 
			<Button
				full
				onPress={this.onRegisterButtonPress.bind(this)} 
			>
				<Text style={{ color: 'white' }}>Confirm</Text>
			</Button>
		);
	}

	render() {
		return (
			<Container>
				<Content>
					<View style={styles.titleContainerStyle}>
						<Text style={styles.titleTextStyle}>Almost done! We need a bit more info...</Text>
					</View>
					<Form>
						<Item stackedLabel>
							<Label>Email</Label>
							<Input 
								onChangeText={this.onEmailChange.bind(this)}
								value={this.props.email}
							/>
						</Item>
						<Item stackedLabel>
							<Label>Password</Label>
							<Input 
								onChangeText={this.onPasswordChange.bind(this)}
								value={this.props.password}
							/>
						</Item>
						<View style={styles.buttonContainerStyle}>
							{this.renderRegisterButtonOrSpinner()}
						</View>
					</Form>
				</Content>
			</Container>
		);
	}
}

const styles = {
	titleContainerStyle: {
		paddingTop: 25,
		paddingBottom: 25
	},
	titleTextStyle: {
		textAlign: 'center'
	},
	buttonContainerStyle: {
		paddingTop: 30
	},
	buttonStyle: {
		alignSelf: 'center',
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'brown',
		borderWidth: 0.2
	},
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
	registerUser, 
	emailChanged, 
	passwordChanged 
})(Register);
