import axios from 'axios';

const token = JSON.parse(localStorage.getItem('userInfo'))?.token;

export default axios.create({
  baseURL: 'https://haminepal.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  },
});
