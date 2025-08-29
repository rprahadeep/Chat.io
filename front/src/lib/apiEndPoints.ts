import env from './env';

export const BASE_URL = env.BACKEND_URL;
export const API_URL = BASE_URL + '/api';
export const LOGIN_URL = API_URL + '/auth/login';
