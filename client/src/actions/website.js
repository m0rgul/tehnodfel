import axios from 'axios';

export const FETCH_WEBSITE_DATA = 'FETCH_WEBSITE_DATA';
export const FETCH_WEBSITE_DATA_SUCCESS = 'FETCH_WEBSITE_DATA_SUCCESS';
export const FETCH_WEBSITE_DATA_ERROR = 'FETCH_WEBSITE_DATA_ERROR';

export const fetchWebsiteData = () => {
  const request = axios({method: 'get', url: '/api/website', headers: []});

  return {type: FETCH_WEBSITE_DATA, payload: request}
};

export const fetchWebsiteDataSuccess = (data) => {
  return {type: FETCH_WEBSITE_DATA_SUCCESS, payload: data}
};

export const fetchWebsiteDataError = (error) => {
  return {type: FETCH_WEBSITE_DATA_ERROR, payload: error}
};
