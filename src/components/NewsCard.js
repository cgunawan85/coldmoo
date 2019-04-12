import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import moment from 'moment';

class NewsCard extends Component {
	renderDate() {
		const day = moment.unix(this.props.newsItem.date);
		return day.format('dddd, MMMM Do YYYYs');
	}

	render() {
		const { 
			cardStyle, 
			imageContainerStyle, 
			imageStyle, 
			titleContainerStyle, 
			titleTextStyle, 
			dateContainerStyle, 
			dateTextStyle, 
			bodyContainerStyle, 
			bodyTextStyle 
		} = styles;

		const {
			photo,
			title,
			body
		} = this.props.newsItem;

		return (
			<View style={cardStyle}>
				<View style={imageContainerStyle}>
					<Image 
						source={{ uri: photo }}
						style={imageStyle}
						resizeMode={'cover'}
					/>
				</View>
				<View style={titleContainerStyle}>
					<Text style={titleTextStyle}>{title}</Text>
				</View>
				<View style={dateContainerStyle}>
					<Text style={dateTextStyle}>{this.renderDate()}</Text>
				</View>
				<View style={bodyContainerStyle}>
					<Text style={bodyTextStyle}>
						{body}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	cardStyle: {
		paddingBottom: 60
	},
	imageContainerStyle: {
		backgroundColor: 'black',
		width: '100%',
		alignItems: 'center',
	},
	imageStyle: {
		width: '100%',
		height: 350
	},
	titleContainerStyle: {
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: '#E8E8E8',
		borderBottomColor: '#990000',
		borderBottomWidth: 1.5,
	},
	titleTextStyle: {
		fontSize: 24,
		textAlign: 'center',
		color: 'black'
	},
	dateContainerStyle: {
		paddingTop: 20,
		paddingBottom: 10
	},
	dateTextStyle: {
		fontSize: 14,
		textAlign: 'center'
	},
	bodyContainerStyle: {
		paddingLeft: 35,
		paddingRight: 35,
		paddingTop: 10
	},
	bodyTextStyle: {
		color: 'black',
		fontSize: 16
	}
};

export default NewsCard;
