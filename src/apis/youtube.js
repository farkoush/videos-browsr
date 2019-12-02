import axios from 'axios';
const KEY = 'AIzaSyBNe7ulR78VxR6mxIePPwVc9wOQ0bvnklY';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});
