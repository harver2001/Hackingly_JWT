import axios from 'axios'

export const axiosInstance = axios.create({
  "Access-Control-Allow-Origin" : "*",
  baseURL: 'https://api.hackingly.xyz'
});