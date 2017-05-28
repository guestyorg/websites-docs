const http = require('axios');
const base_url = 'http://localhost:3000/api/v2';
const headers = {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI1NWI5ZjliNTM5M2RmZTBlMDA0YjZjNWQiLCJ3ZWJzaXRlSWQiOiI1OTJhY2JiYmQ0OTFlNjljMDUzOWRhNTUiLCJuYW1lIjoid2Vic2l0ZSIsInJvbGUiOiJ3ZWJzaXRlIiwiaWF0IjoxNDk1OTc2OTM2LCJleHAiOjE0OTY1ODE3MzZ9.687WGnh1WcD6itnMYU726kljSMQI1u7Ftls9g8jklps'
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
