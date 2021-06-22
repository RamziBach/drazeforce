import axios from 'axios';

const username = process.env.RALLY_IO_USERNAME;
const password = process.env.RALLY_IO_PASSWORD;
const callback_url = process.env.SAMPLE_APP_CALLBACK;
const rally_api_url = `${process.env.RALLY_API_URL}/v1`;

const toConfig = headers =>
  headers && Object.keys(headers).length ? { headers } : undefined;

const httpPost = async (url, body, headers) => {
  try {
    return await axios.post(url, body, toConfig(headers));
  } catch (err) {
    return err.response;
  }
};

const httpGet = async (url, headers) => {
  try {
    return await axios.get(url, toConfig(headers));
  } catch (err) {
    return err.response;
  }
};

let access_token = undefined;
let refresh_token = undefined;
let expires = undefined;
let token_type = undefined;

const set_authentication = data => {
  if (data) {
    access_token = data.access_token;
    expires = (data.expires_in || 3600) * 1000 + Date.now();
    refresh_token = data.refresh_token || refresh_token;
    token_type = data.token_type;
  } else {
    access_token = undefined;
    expires = undefined;
    refresh_token = undefined;
    token_type = undefined;
  }
};

const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

const getCookie = name => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const eraseCookie = name => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export {
  username,
  password,
  callback_url,
  rally_api_url,
  httpPost,
  httpGet,
  set_authentication,
  access_token,
  refresh_token,
  expires,
  token_type,
  setCookie,
  getCookie,
  eraseCookie,
};
