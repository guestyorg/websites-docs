const http = require('axios');
const base_url = 'http://localhost:3000/api/v2';
const headers = {
  Authorization: 'Bearer ask-for-website-token'
};

const get = (
  url,
  params = {}
) => http.get(`${base_url}${url}`, {
  params,
  headers
});

const post = (
  url,
  data = {},
  params = {}
) => http.post(`${base_url}${url}`, {
  data,
  params,
  headers
});

export {
  get,
  post
}
