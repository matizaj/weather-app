import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/forecast',
    params: {
        appid: '403f7acda9b8c770c93d2e35f44715e0'
    }
});
