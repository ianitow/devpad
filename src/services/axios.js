import axios from 'axios';

axios.defaults.headers['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGFiNDIxNzY3Zjg0ODJmNmNjMmVkZCIsImlhdCI6MTU5OTUyNTExMSwiZXhwIjoxNTk5NjExNTExfQ.pedvMruFVEVV-FspQfABeJusHBGDVoM9Nm1OzcIYi7Y';

export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
