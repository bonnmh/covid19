/**
 * @flow
 * @format
 */

import axios from 'axios';
import {BASE_URL} from 'constants/constants';

const APIInstance = axios.create({
  timeout: 200000,
  baseURL: BASE_URL,
});

export default APIInstance;
