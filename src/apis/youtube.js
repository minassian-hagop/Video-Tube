import axios from 'axios';

const KEY = 'AIzaSyAgLKudByIkXgNALiXZxNUO1cDoinxFomU';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});