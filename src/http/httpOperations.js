import axios from 'axios';



export const httpGet = async (endpoint) => {
  return await axios.get(endpoint);
};



