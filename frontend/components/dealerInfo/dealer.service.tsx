import axios from 'axios';

import useSWR from 'swr';
import { BASE_URL_DEALER, JSON_HEADERS } from '../constants';

const getDealers = async () => {
    const response = await axios.get(BASE_URL_DEALER,JSON_HEADERS).then(res => res.data.data);
    return response;
}

export default getDealers;