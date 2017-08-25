import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
// no files means from node_modules??  confirm

class App extends Component {
	componentWillMount(){
		firebase.initializeApp({
	    apiKey: 'AIzaSyD6aRtLsTB1hxRysB9s6zD2KR5g1_gp8GY',
	    authDomain: 'auth-b5802.firebaseapp.com',
	    databaseURL: 'https://auth-b5802.firebaseio.com',
	    projectId: 'auth-b5802',
	    storageBucket: 'auth-b5802.appspot.com',
	    messagingSenderId: '587745665525'
  	});
	}

	render () {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;