import React, {Component} from 'react';
//import '../App.css';
import Album from './Album';
const axios = require('axios');

class App extends Component {
	constructor() {
		super();

		this.state = {
			galleries: []
		}
		console.log("App constructed.");
	}

	componentDidMount() { // best time to make an API call
		console.log("componentDidMount ran");

		for(let i = 1; i <= 20; i++) {
			lookupGallery(this, i);
		}
	}

	render() {
		return this.state.galleries.sort((a, b) => {
			if(a[0].albumId < b[0].albumId) return -1;
			else if(a[0].albumId > b[0].albumId) return 1;
			else return 0;
		}).map(item => {
			console.log("Sending album " + item[0].albumId + " out for rendering.");
			return (
				<div className="App">
					<Album id={item[0].albumId} data={item} />
				</div>
			);
		});
	}
}

const lookupGallery = async function(them, i) {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${i}&_limit=20`);

	them.setState({
		galleries: [...them.state.galleries, response.data]
	}, () => {
		console.log("Just updated galleries:", them.state.galleries);
	});
}

export default App;


/*

https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/albums/1/photos

https://jsonplaceholder.typicode.com/photos?albumId=2&limit=20


http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10

axios.get('/user?ID=12345')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});






*/
