import axios from 'axios';

axios.defaults.headers['Authorization'] =

  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGFiNDIxNzY3Zjg0ODJmNmNjMmVkZCIsImlhdCI6MTU5OTA5MjkwMSwiZXhwIjoxNTk5MTc5MzAxfQ.xgJo1OE_50phOJ3ja8HHD5X4HtOzal2XfAQZbnBFDDQ';


export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
