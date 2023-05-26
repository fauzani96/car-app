import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/cars',
  headers: {
    'X-Api-Key': process.env.REACT_APP_API_KEY,
  },
})

export const fetcher = (url: string) => api.get(url).then((res) => res.data)
