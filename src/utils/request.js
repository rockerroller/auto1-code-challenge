import axios from 'axios';

export async function get(path, opts = {}) {
  const endpointUrl = process.env.REACT_ENDPOINT_URL || 'http://localhost:3001';
  const { data } = await axios.get(`${endpointUrl}/${path}`, opts);
  return data;
}
