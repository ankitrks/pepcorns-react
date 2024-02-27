import { devConfig } from '../config';
import { getCookie } from '../components/utils';
import { apiServer } from './index';

const BASE_URL = `${devConfig.API_HOST}/api/v1/users`;
const headers = {
  'Content-Type': 'application/json',
};
if (localStorage.getItem('access')) {
  headers['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
}


function getDetailsData(userData) {
  return fetch(`${BASE_URL}/details`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(userData),
  });
}

export const authHandlers = {
  getDetailsData,
};
