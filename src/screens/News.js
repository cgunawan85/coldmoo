import _ from 'lodash';
import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Body, Button, Container, Content, Header, Title, Left } from 'native-base';
import { connect } from 'react-redux';
import { signOut, newsFetch } from '../actions';
import NewsCard from '../components/NewsCard';

class News extends Component {
	componentDidMount() {
		this.props.newsFetch();
	}

	onLogoutButtonPress() {
		this.props.signOut();
	}

	renderCard(newsItem) {
		return <NewsCard newsItem={newsItem.item} />;
	}

	render() {
		const { headerStyle, headerTitleStyle, contentContainerStyle } = styles;
		return (
			<Container>
				<Header style={headerStyle}>
					<Left>
						<Button 
							onPress={this.onLogoutButtonPress.bind(this)}
							rounded
							danger
						>
							<Text style={{ color: 'white' }}>Logout</Text>
						</Button>
					</Left>
					<Body>
						<Title style={headerTitleStyle}>News</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={contentContainerStyle}>
					<FlatList 
						data={this.props.news}
						renderItem={this.renderCard}
						keyExtractor={(newsItem) => newsItem.title}
					/>
				</Content>
			</Container>
		);
	}
}

const styles = {
	headerStyle: {
		backgroundColor: '#F9DEBC',
	},
	headerTitleStyle: {
		color: 'black',
	},
	contentContainerStyle: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
};

const mapStateToProps = (state) => {
	const news = _.map(state.news.newsList, (val) => {
		return { ...val };
	});
	return { news };
};

export default connect(mapStateToProps, { signOut, newsFetch })(News);
