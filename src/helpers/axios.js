import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.axopolitan.com/api/v1',
    headers: {
        'dev_mode': 'staging'
    }

});