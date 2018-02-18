import axios from 'axios'

export const getCheer = () => {
  return axios.get('/api/v0/cheer/random')
}