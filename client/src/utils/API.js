import axios from 'axios'

export default axios.create({
  baseURL: '/products',
  headers: { 'Content-Type': 'application/json' }
});