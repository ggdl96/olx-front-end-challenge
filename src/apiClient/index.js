import axios from 'axios';

import config from '../config';

// Set config defaults when creating the instance
export const instance = axios.create({
    baseURL: config.api_url,
    timeout: 25000, // 25 seconds
    headers: {
        'X-AUTH-APIKEY': config.api_key,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});
