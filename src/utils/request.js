import axios from 'axios';

export async function get(path, params = {}) {
  const endpointUrl = process.env.REACT_ENDPOINT_URL || 'http://localhost:3001';
  const { data } = await axios.get(`${endpointUrl}/${path}`, { params });
  return data;
}
