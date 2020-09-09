import axios from 'axios';

axios.defaults.headers['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGFiNDIxNzY3Zjg0ODJmNmNjMmVkZCIsImlhdCI6MTU5OTYyMDUxMiwiZXhwIjoxNTk5NzA2OTEyfQ.-i9fG8A9b7XJ8NO6QzqDod0cQkW5HX2N0-Bgx_pOsSA';

export default axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  timeout: 10000,
});
