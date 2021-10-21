import axios from 'axios'
import { APIResponse } from '@/types'

// API key to cryptocompare
const API_KEY            = 'b73b2c37527b0732132092aa1a15b63e96b5ef5dfde6b7010b194bd0334148fs'
// cryptocompare API root
const API_ROOT    = 'https://min-api.cryptocompare.com'
// Endpoint for top crypto currencies
const API_TOP_CURRENCIES = 'data/top/totalvolfull'

async function getFromAPI(endpoint: string): Promise<APIResponse> {
  const config = {
    headers: {
      Authorization: `Apikey ${API_KEY}`
    }
  } 
  const resp = await axios.get(`${API_ROOT}/${endpoint}`, config)
  return {
    data:   resp.data,
    status: {
      code: resp.status,
      text: resp.statusText
    }
  }
}

async function getTopCryptoCurrencies(limit = '100', tsym = 'USD'):
  Promise<APIResponse>
{
  return getFromAPI(`${API_TOP_CURRENCIES}?limit=${limit}&tsym=${tsym}`)
}

export default {
  API_ROOT,
  getTopCryptoCurrencies
}
