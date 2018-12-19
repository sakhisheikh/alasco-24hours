import axios from 'axios';

// constants
import { ACCESS_KEY, API_URL, SYMBOLS } from '../utils/Constants';

const getCurrencyRates = async () => {
  const URL = `${API_URL}/api/latest?access_key=${ACCESS_KEY}&symbols=${SYMBOLS}`;
  try {
    const response = await axios(URL, {
      method: 'GET',
    });
    // handle success
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getCurrencyRates;
